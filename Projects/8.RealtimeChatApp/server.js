const http = require('http') //used for sockets

const express = require('express')
const app = express()

const socket_io = require('socket.io')

//creating http server out of express
const Server = http.createServer(app)

const io = socket_io(Server)

io.on('connection', (socket) => {
    console.log('Connected with Socket id : ', socket.id)

    socket.on('msg_send', (data) => {
        io.emit('msg_recieved', data)
        console.log('recieved ', data.msg)
    })

})




app.use('/', express.static(__dirname + '/public'))

Server.listen(3344, () => {
    console.log('Server Started on http://localhost:3344')
})