const sequelize = require('sequelize')

const db = new sequelize('testingdatabase', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    db
}
//testing Connection

/* db.authenticate()
    .then(() => { console.log('connection successful') })
    .catch((e) => { console.error(e) }) */