/* const async = require('hbs/lib/async') */
const { db } = require('./models')
const { app } = require('./server')

const start = async () => {
    try {
        await db.sync()
        app.listen(3131, () => {
            console.log('server Started')
        })

    } catch (e) {
        console.error(e)
    }
}
start()