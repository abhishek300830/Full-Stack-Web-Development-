const express = require('express')
const app = express()
//starting server
app.listen(4444, () => {
    console.log('Server is Started')
})
//to use body functionality in post
app.use(express.urlencoded({ extended: true }))

//using hbs
app.set('view engine', 'hbs')
//creating a array
let tasks = ['sample task'
]

//creating path and afterwords passing array  to taskLists
app.get('/', (req, res) => {
    res.render('home', {
        title: 'ToDo List',
        tasks
    })

})


//listen to post request
app.post('/', (req, res) => {
    tasks.push(req.body.newTask)
    res.redirect('/')

})