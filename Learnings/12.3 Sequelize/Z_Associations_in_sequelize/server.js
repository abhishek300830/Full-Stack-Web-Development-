const express = require('express')

//at end
const path = require('path')

//at last importing 
const { center, season, course, batch } = require('./models')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname + "/views"))


//in last step make it async to use await function
app.get('/batchcode', async (req, res) => {
    try {
        const centers = await center.findAll()
        const seasons = await season.findAll()
        const courses = await course.findAll()
        const years = [2016, 2017, 2018, 2019, 2020, 2021]
        res.render('batchcode', {
            centers, seasons, courses, years
        })
    } catch (e) {
        console.error(e)
    }

})

//handle post request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/batchcode', async (req, res) => {
    let batchcode = '' //WDPP18S1
    batchcode += req.body.course
    batchcode += req.body.center
    batchcode += req.body.year.substr(2)
    batchcode += req.body.season
    batchcode += req.body.batchno

    try {
        await batch.create({
            code: batchcode,
            year: req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.start),
            end: Date.parse(req.body.end)
        })
        console.log(batchcode)

    } catch (e) {
        console.log(e)
    }
    res.send(batchcode)
})
module.exports = {
    app
}