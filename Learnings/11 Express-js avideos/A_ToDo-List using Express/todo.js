const express = require('express')
const app = express()
//starting server
app.listen(4444, () => {
    console.log('Server is Started')
})
//to use body functionality in post
app.use(express.urlencoded({ extended: true }))

//creating a array
let tasks = ['sample task'
]

//creating path and afterwords passing array  to taskLists
app.get('/', (req, res) => {
    let taskLists = tasks.map(t => `<li>${t}</li>`).join('\n')
    res.send(`
        <html>
        <body>
        <form action="/"  method="post">
        <input name="newTask">
        <button type="submit">ADD</button>
        </form>
        <ul> ${taskLists}
        </ul>
       
        </body>
        </html>
    `)
})




//listen to post request
app.post('/', (req, res) => {
    tasks.push(req.body.newTask)
    res.redirect('/')

})