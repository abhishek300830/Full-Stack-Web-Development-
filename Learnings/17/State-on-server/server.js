const express = require('express')
const app = express()

const expressSession = require("express-session")

app.use(expressSession({
    resave: true, //save the cookie on each client - communication
    saveUninitialized: true, // save cookie even if nothing to track
    secret: "some extra text", //used to encrypt cookie
    name: "myCookie"
}))

app.set('view engine', 'hbs')
/* let count = 0; */
app.get('/', (req, res) => {
    /*  count++; */

    if (!req.session.visits) req.session.visits = 1
    else req.session.visits++;
    console.log(req.session)
    res.render('index', { count: req.session.visits })
})
app.listen(4444, () => {
    console.log('Server Started')
})