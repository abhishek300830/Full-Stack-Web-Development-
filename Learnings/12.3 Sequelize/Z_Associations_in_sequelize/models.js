const { DataTypes } = require('sequelize')
const { db } = require('./connection')


const course = db.define('course', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(40)
    }
})

const teacher = db.define('teacher', {
    id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true
    }
})

const center = db.define('center', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})

const season = db.define('season', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})

//batch

const batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE
})

//associations
batch.belongsTo(course)
batch.belongsTo(center)
batch.belongsTo(season)

course.hasMany(batch)
center.hasMany(batch)
season.hasMany(batch)

db.sync({ alter: true })
    .then(() => { console.log('done') })
    .catch((e) => { console.error(e) })


module.exports = {
    course,
    teacher,
    center,
    season,
    batch,
    db
}