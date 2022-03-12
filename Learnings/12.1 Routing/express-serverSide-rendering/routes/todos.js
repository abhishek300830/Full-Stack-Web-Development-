const route = require('express').Router()
let todoArray = [
    { task: "this is first task" },
    { task: "this is second task" }
]
route.get('/', function (req, res) {
    res.render('todos', { todoArray })
})
route.post('/', function (req, res) {
    todoArray.push({
        task: req.body.newtodo //newtodo is name of input
    })
    res.redirect('/todoscall')  //redirect to get request
})
module.exports = route