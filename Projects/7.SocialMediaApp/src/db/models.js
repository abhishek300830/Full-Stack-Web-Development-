const Sequelize = require('sequelize')

const db = new Sequelize('socialmediadb', 'socialmediauser', 'socialmediapass', {
    host: 'localhost',
    dialect: 'mysql'
})

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false,

}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(150),
    allowNull: false,
}
//define models

const users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF,

})
const posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }

})
const comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }

})
//relations
users.hasMany(posts)
posts.belongsTo(users)

users.hasMany(comments)
comments.belongsTo(users)

posts.hasMany(comments)
comments.belongsTo(posts)


module.exports = {
    db,
    users,
    posts,
    comments
}