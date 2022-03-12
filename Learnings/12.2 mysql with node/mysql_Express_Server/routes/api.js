const route = require('express').Router()
//this route is on the api

const db = require('../db')


route.get('/persons', (req, res) => {
    //send all persons as array here
    db.getAllPersons()
        .then((personDetails) => res.send(personDetails))
        .catch((err) => { res.send({ error: err }) })
})

route.post('/persons', (req, res) => {
    //add new person details
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/api/persons')
        })
        .catch((err) => { res.send({ error: err }) })

})


module.exports = {
    route
}