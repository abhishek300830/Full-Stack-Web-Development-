const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { db } = require('./db/models')

const { usersRoute } = require('./routes/api/users')
const { postsRoute } = require('./routes/api/posts')

app.use('/', express.static(__dirname + '/public'))
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)



db.sync()
    .then(() => {
        app.listen(4444, () => {
            console.log("Server Started")
        })
    })
    .catch((err) => {
        console.error(new Error('could not start database'))
        console.log(err)
    })
