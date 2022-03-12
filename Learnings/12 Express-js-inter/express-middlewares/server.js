const express = require('express')
const app = express()
//server started
app.listen(4343, () => {
    console.log('Server Started at http://localhost:4343/')
})
//middlewares
function m1(req, res, next) {
    console.log('running middleware 1')
    next()
}
function m2(req, res, next) {
    console.log('running middleware 2')
    next()
}
function m3(req, res, next) {
    console.log('running middleware 3')
    next()
}
function m4(req, res, next) {
    console.log('running middleware 4')
    next()
}
//get
app.get('/hello', m2, m4, (req, res) => {
    res.send('Hello World')
})