const { Router } = require('express')

const postsRoute = Router()

const { createPost, findAllPosts } = require('../../../controllers/posts')

postsRoute.get('/', async (req, res) => {
    const posts = await findAllPosts()
    res.status(200).send(posts)
})

postsRoute.post('/', async (req, res) => {

    const { userId, title, body } = req.body

    if ((!userId) || (!title) || (!body)) {
        return res.status(400).send({
            error: 'Neet Userid, Title and body to create post'
        })
    }
    const posts = await createPost(userId, title, body)
    res.status(201).send(posts)


})


module.exports = {
    postsRoute
}