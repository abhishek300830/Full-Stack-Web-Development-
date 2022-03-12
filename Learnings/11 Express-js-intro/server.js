const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

function middleware1(req, res, next) {
    console.log(req.url)
    next()

}
function middleware2(req, res) {
    console.log(req.hostname)
    res.send('hello everone how are you all')
}
app.get('/x', middleware1, middleware2)

app.listen(4444, () => {
    console.log('Server is started at http://localhost:4444')
})