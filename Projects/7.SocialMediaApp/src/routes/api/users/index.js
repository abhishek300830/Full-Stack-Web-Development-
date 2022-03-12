const { Router } = require('express')

const usersRoute = Router()

const { getUserById, getUserByUsername, createAnonUser } = require('../../../controllers/users')

usersRoute.get('/:id', async (req, res) => {
    let user;
    if (isNaN(parseInt(req.params.id))) {
        //by username
        user = await getUserByUsername(req.params.id)
    }
    else {
        user = await getUserById(parseInt(req.params.id))
    }
    if (user) {
        res.status(200).send(user)
    } else {
        res.status(404).send({
            error: 'no Such User id or Username'
        })
    }
})

usersRoute.post('/', async (req, res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
})



module.exports = {
    usersRoute
}