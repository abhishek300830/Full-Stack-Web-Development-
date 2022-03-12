const sequelize = require('sequelize')

const DataTypes = sequelize.DataTypes
//creating connection
const db = new sequelize('testingdatabase', 'myuser', 'mypass', {
    host: 'localhost',
    dialect: 'mysql'
})
//creating Table
const student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        defaultValue: -1
    }
}
)

db.sync()
    .then(() => { console.log('Database Synchronised') })
    .catch(console.error)



/* if you want to alter this table the use */

/* db.sync({alter:true})
    .then(() => { console.log('Database Synchronised') })
    .catch(console.error) */

/* force:true can drop table */

//inserting values in table using sequelize
const task = async () => {
    try {
        await db.sync()
        await student.create({
            name: 'abhishek Gurjar',
            age: 20
        })
    }
    catch (err) {
        console.error(err)
    }
}
//calling task
task();

module.exports = {
    db,
    student
}