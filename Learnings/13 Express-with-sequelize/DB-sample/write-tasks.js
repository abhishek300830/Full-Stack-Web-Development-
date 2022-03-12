const Sequelize = require('sequelize')

const db = new Sequelize({
    /* host: 'localhost', */ //no need to write for localhost
    database: 'sampledb',
    dialect: 'mysql',
    username: 'sampleuser',
    password: 'samplepass',

})

//tasks is my Model
const tasks = db.define('task', {
    //here we define colums
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})
/* db.authenticate() */

async function task() {
    await db.sync();
    //no need to mention id and done because id is auto increment and done contains default value
    await tasks.create({ title: 'some task to be done' })

    await tasks.bulkCreate([
        { title: 'this is task 1' },
        { title: 'this is task 2' },
        { title: 'this is task 3' },
        { title: 'this is task 4' },
        { title: 'this is task 5' },
        { title: 'this is task 6' },
    ],
        { ignoreDuplicates: true }
    )

    const Select_tasks = await tasks.findAll();
    console.log('task found = ', Select_tasks.length)
    Select_tasks.forEach((t) => {
        console.log(`${t.id} \t \t ${t.done} \t\t ${t.title}`)
    })
}
task()