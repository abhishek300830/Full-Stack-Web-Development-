const express = require('express')

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const { name } = req.body
    res.send(name)
})
app.listen(5555, () => {
    console.log('Server Started')
})
