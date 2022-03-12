const { db, student } = require('./Create_Models_and_inserting_data')

const task = async () => {
    try {
        await db.sync()
        const students = await student.findAll() // findAll({where:{age:12}}) we can apply condition here 
        /* console.log(students) */             //  findAll({where:{age:{$gt:15}}}) age greater than 15
        /* students.forEach(student => { console.log(student.dataValues) }) */
        students.forEach(s => {
            console.log(`
        name:${s.dataValues.name} \t\t age:${s.dataValues.age}
        `)
        })
    }
    catch (e) {
        console.error(e)
    }
}
task();