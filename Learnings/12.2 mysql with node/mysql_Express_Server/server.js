const express = require('express')
const app = express()

const path = require('path') //to use public_static here

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')

app.use('/pages', require('./routes/pages').route)
app.use('/api', require('./routes/api').route)

app.listen(4444, () => {
    console.log('Server Started')
})
app.use('/', express.static(path.join(__dirname + '/public_static')))




/* app.get('/', (req, res) => {
    db.getAllPersons()
        .then((personDetails) => {  //persondetails as rows //here rows are coming from promise
            res.render('persons', { personDetails })
        })
        .catch((err) => {
            res.send(err)
        })

})

app.get('/addperson', (req, res) => {
    res.render('persons_add')
})
//post request handler for person_add.hbs
app.post('/addperson', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
        .then(() => {
            res.redirect('/')
        })
        .catch((err) => {
            res.send(err)
        })
}) */


/* res.render('persons', {
    personDetails: [
        { name: 'ABC', age: 22, city: 'delhi' },
        { name: 'xyz', age: 22, city: 'kolkata' }
    ]
}) */