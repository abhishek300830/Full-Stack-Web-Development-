const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()

const server = http.createServer(app)
const io = socketio(server)

app.use('/', express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log("Socket ID is :", socket.id)
    socket.on('colorIt', (data) => {
        /* console.log('colorIt event Recieved ', data) */
        io.emit('colorIt', data)
    })
})

server.listen(5555, () => {
    console.log('Server Started')
})