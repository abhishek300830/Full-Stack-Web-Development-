const sequelize = require('sequelize')

const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + "/users.db"
})
const users = db.define('user', {
    id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: sequelize.DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: sequelize.DataTypes.STRING(30),

    },
    password: {
        type: sequelize.DataTypes.STRING,
        allowNull: true,
    }
})
module.exports = {
    db,
    users,

}