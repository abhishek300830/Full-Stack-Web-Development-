const routerz = require('express').Router()

let todo = []
routerz.get('/', (req, res) => {
    res.send(todo)
})
routerz.post('/', (req, res) => {
    todo.push({
        task: req.body.task
    })
    res.send(todo)
})

module.exports = routerz