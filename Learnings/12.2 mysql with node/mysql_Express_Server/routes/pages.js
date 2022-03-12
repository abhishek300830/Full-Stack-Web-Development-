const route = require('express').Router()
const db = require('../db')

route.get('/', (req, res) => {
    db.getAllPersons()
        .then((personDetails) => {  //persondetails as rows //here rows are coming from promise
            res.render('persons', { personDetails })
        })
        .catch((err) => {
            res.send(err)
        })

})

route.get('/addperson', (req, res) => {
    res.render('persons_add')
})
//post request handler for person_add.hbs
route.post('/addperson', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/pages')
        })
        .catch((err) => {
            res.send(err)
        })
})


exports = module.exports = {
    route
}

