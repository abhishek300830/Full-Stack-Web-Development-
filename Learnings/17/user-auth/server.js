const express = require('express')
const app = express()
const session = require('express-session')
const { db, users } = require('./db')

//req to handle post
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
//appling cookies to site
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "someSecretText",
}))

//sync db and start server
db.sync()
    .then(() => {
        app.listen(4444, () => {
            console.log('Server is Started')
        })
    })
    .catch(console.error)

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.post('/signup', async (req, res) => {
    const user = await users.create({
        userName: req.body.userName,
        password: req.body.password,  // in production we save password in form of hash
        email: req.body.email
    })
    res.status(201).send(`User ${user.id} Created`)
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const user = await users.findOne({ where: { userName: req.body.userName } })
    if (!user) {
        return res.status(404).render('login', { error: 'no such user name found' })
    }
    if (user.password !== req.body.password) {
        return res.status(401).render('login', { error: 'Wrong Password' })
    }
    req.session.userId = user.id;
    res.redirect('/profile')
})

app.get('/profile', async (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login')
    }
    else {
        const user = await users.findByPk(req.session.userId)
        res.render('profile', { user })
    }


})

app.get('/logout', (req, res) => {
    req.session.userId = null
    res.redirect('/login')
})