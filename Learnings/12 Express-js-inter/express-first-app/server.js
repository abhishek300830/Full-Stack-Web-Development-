const express = require('express')
const app = express()

app.listen(4321, () => {
    console.log('server started at http://localhost:4321/hello')
})

app.get('/hello', (req, res) => {
    let person = 'Guest'
    if (req.query.user) { person = req.query.user }
    res.send('Hello world ' + person)
})

app.use('/abc', express.static(__dirname + '/public'))