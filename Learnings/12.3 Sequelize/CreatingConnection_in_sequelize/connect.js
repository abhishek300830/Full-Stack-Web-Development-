const sequelize = require('sequelize')
//creating connection
const db = new sequelize('testingdatabase', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})
//tesing the connection
db.authenticate()
    .then(() => { console.log("connection worked") })
    .catch((err) => { console.error(err) })