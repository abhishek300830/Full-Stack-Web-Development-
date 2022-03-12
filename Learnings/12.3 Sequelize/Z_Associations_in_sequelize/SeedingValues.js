const { db, center, course, teacher, season, batch } = require('./models')

const seed = async () => {
    try {
        db.sync({ alter: true })
        await center.bulkCreate([
            { id: 'PP', name: 'Abhishek', city: 'new Delhi' },
            { id: 'DW', name: 'aryan', city: 'Kolkata' },
            { id: 'NQ', name: 'gurjar', city: 'Mumbai' },
            { id: 'LL', name: 'choudhary', city: 'Delhi' }
        ], {
            ignoreDuplicates: true
        })
        await season.bulkCreate([
            { id: 'S', name: 'Summer' },
            { id: 'F', name: 'fall' },
            { id: 'W', name: 'Winter' },
            { id: 'P', name: 'Spring' }
        ], {
            ignoreDuplicates: true
        })
        await course.bulkCreate([
            { id: 'LP', name: 'launcpad' },
            { id: 'CX', name: 'crux' },
            { id: 'IB', name: 'Interview bootcamp' },
            { id: 'AD', name: 'Android devlopment' },
        ], {
            ignoreDuplicates: true
        })
    }
    catch (e) {
        console.error(e)
    }
}
seed()