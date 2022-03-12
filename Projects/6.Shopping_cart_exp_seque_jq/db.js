const Sequelize = require('sequelize')

const db = new Sequelize('shoppingdb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql',
    /* pool: { //how many min or max connections are there //default value present
        min: 0,
        max: 2,
    } */
})

const User = db.define('user', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
    }
})

const Product = db.define('product', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false,
    },
    manufacturer: {
        type: Sequelize.DataTypes.STRING(50),
    },
    price: {
        type: Sequelize.DataTypes.FLOAT(50),
        allowNull: false,
        defaultValue: 0.0,
    }
})
db.sync()
    .then(() => {
        console.log('Database has been Synced')
    })
    .catch((err) => {
        console.error('Error in creating database')
    })
exports = module.exports = {
    User,
    Product
}