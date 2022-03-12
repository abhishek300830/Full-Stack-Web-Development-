const route = require('express').Router()

const User = require('../../db').User

route.get('/', (req, res) => {
    /* we want to send array of all users from database firstly import users from db.js */
    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error: 'could not Retrive Users'
            })
        })
})

route.post('/', (req, res) => {
    //we aspect to req to have name in it 
    // we will create a new user here
    User.create({
        name: req.body.name
    })
        .then((user) => {
            res.status(201).send(user)
        })
        .catch((err) => {
            res.status(501).send({
                error: 'could not add User'
            })
        })

})

exports = module.exports = route