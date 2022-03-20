const express = require('express');

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('HelloWorld') //we can also give Html in ''
})

app.get('/greet', (req, res) => {       //http://localhost:4444/greet?person=abhishek
    let person = 'Guest'                // get recive data as Query           
    if (req.query.person)
        person = req.query.person
    res.send('Good Morning ' + person)
})

app.post('/greet', (req, res) => {      //http://localhost:4444/greet?person=abhishek
    let person = 'Guest'
    let phone = '0'
    console.log(req.body)               //post recive data in body of request
    if (req.body.person) {
        person = req.body.person
        phone = req.body.phone
    }
    res.send('Good Evening ' + person + 'Your Phone Number is :' + phone)
})

//path variable 
app.get('/:city/welcome', (req, res) => {       //city is variable here run this to understand
    res.send('welcome to ' + req.params.city)
})

// adding form to server
app.get('/form', (req, res) => {    //open file in server
    res.sendFile(__dirname + '/files/form.html')
})

//starting server 
app.listen(4444, () => {
    console.log('Server Started at http://localhost:4444')
})