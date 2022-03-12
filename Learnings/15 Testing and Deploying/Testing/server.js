const express = require('express')

const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, '/public_static')))

app.listen(4444, () => {
    console.log('Server Started at 4444')
})  