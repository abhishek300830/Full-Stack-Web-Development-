const express = require('express')
const app = express()
const route = require('./routers/router')
//listen to server
app.listen(4444, () => {
    console.log('Server Started')
})
app.use('/public', express.static(__dirname + '/public'))

//to use body in post
/* app.use(express.json()) */
app.use(express.urlencoded({ extended: true }))

app.use('/router', route)