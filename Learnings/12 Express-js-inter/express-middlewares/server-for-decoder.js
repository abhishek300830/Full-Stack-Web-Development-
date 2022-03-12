const express = require("express");

const app = express()

app.listen(4444, () => {
    console.log('Server started')
})

app.use('/', express.static(__dirname + '/public-base64'))

//function to decode base 64
function decoder(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q]
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval', decryptQuery, decoder, (req, res) => {

    let data = req.query.formtextarea
    console.log(data)
    let edata = eval(data)
    console.log(edata)
    res.send('Solution is ' + edata)
})

//decryption 
function decryptQuery(req, res, next) {
    let data = req.query.formtextarea
    let decryptedData = "";
    for (let i = 0; data[i] != undefined; i = i + 1) {
        if (data[i] == data[i].toUpperCase()) {
            decryptedData += data[i].toLowerCase()
        } else {
            decryptedData += data[i].toUpperCase()
        }
    }
    req.query.formtextarea = decryptedData
    next();
}