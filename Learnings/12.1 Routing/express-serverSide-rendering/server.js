const express = require('express')
//adding route
const todoroute = require('./routes/todos')
const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({ extended: true }))
srv.listen(4444, () => {
    console.log('Server started')
})
srv.set('view engine', 'hbs')
/* srv.set('view', 'hbs-file') */
srv.use('/todoscall', todoroute)