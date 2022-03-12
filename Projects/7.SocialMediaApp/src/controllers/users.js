const { users } = require('../db/models')
const { getRandomUsername } = require('../utils/username')

async function createAnonUser() {
    const user = await users.create({
        username: getRandomUsername()
    })
    return user
}

//defined later
async function getUserById(id) {
    return await users.findOne({ where: { id } })
}
async function getUserByUsername(username) {
    return await users.findOne({ where: { username } })
}


module.exports = {
    createAnonUser,
    getUserById,
    getUserByUsername
}

//test code
/* async function task() {
    console.log(await createAnonUser())
}
task() */
