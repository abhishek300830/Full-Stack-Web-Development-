let socket = io();
socket.on('connect', () => {
    document.getElementById('socketid').innerText = socket.id;
})

function colorTheBox(color) {
    document.querySelector('.' + color).style.backgroundColor = color
    setTimeout(() => {
        document.querySelector('.' + color).style.backgroundColor = null
    }, 1000);
}

document.getElementById('colorIt').onclick = function () {
    let color = document.getElementById('selectedColor').value
    /* colorTheBox(color) */
    socket.emit('colorIt', { color })
}

socket.on('colorIt', (data) => {
    colorTheBox(data.color)
})