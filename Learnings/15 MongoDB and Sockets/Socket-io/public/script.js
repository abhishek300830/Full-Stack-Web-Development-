let socket = io()
let boomBtn = document.getElementById('boom')
boomBtn.onclick = function () {
    console.log('boom')
    socket.emit('boom')
}

socket.on('whizz', () => {
    let div = document.createElement('div')
    div.innerHTML = "whizz"
    document.body.appendChild(div)
})
