const { posts, users } = require('../db/models')

// create posts
async function createPost(userid, title, body) {
    const post = await posts.create({
        title: title,
        body: body,
        userId: userid,
    })
    return post
}
//show all post
async function findAllPosts(query) {
    //TODO : we have to handle query params
    const post = await posts.findAll(
        {
            include: [users]
        }
    )
    return post
}

module.exports = {
    createPost,
    findAllPosts
}

//testing createpost
/* async function task() {
    console.log(await createPost(2, 'Title of post', 'sample body of post'))
}
task() */

//testing findallposts
/* async function task() {
    const post = await findAllPosts()
    for (let p of post) {
        console.log(`${p.title}\n auther: ${p.user.username}\n${p.body}\n=============\n`)
    }
}
task() */