let gameboxCanvas = document.getElementById('gamebox')
let context = gameboxCanvas.getContext('2d')

let gameOn = true;

class box {
    constructor(size, color) {
        this.size = size
        this.color = color
        this.x = 0;
        this.y = 0;
    }
}
class player extends box {
    constructor() {
        super(50, 'blue')
        this.x = 0
        this.y = 225
        this.speed = 0;
    }
    move() {
        this.x += this.speed
    }

}
class enemy extends box {
    constructor(speed) {
        super(50, 'red')
        this.x = 0
        this.y = 0
        this.speed = speed
    }
    move() {
        this.y += this.speed
        if (this.y + this.size > 500) {
            this.speed = -(Math.abs(this.speed))
        }
        if (this.y < 0) {
            this.speed = Math.abs(this.speed)
        }

    }
}
class destination extends box {
    constructor() {
        super(50, 'green')
        this.x = 600
        this.y = 225
    }
}
let player1 = new player()
let enemy1 = new enemy(4)
let enemy2 = new enemy(11)
let enemy3 = new enemy(6)
let destination1 = new destination()
enemy1.x = 120
enemy2.x = 270
enemy3.x = 420

function drawbox(box) {
    context.fillStyle = box.color
    context.fillRect(box.x, box.y, box.size, box.size)
}

function gameLoop() {
    if (!gameOn) {
        return
    }
    context.clearRect(0, 0, 650, 500)
    enemy1.move()
    enemy2.move()
    enemy3.move()
    drawbox(enemy1)
    drawbox(enemy2)
    drawbox(enemy3)
    drawbox(player1)
    drawbox(destination1)
    player1.move()
    if (isCollided(enemy1, player1) || isCollided(enemy2, player1) || isCollided(enemy3, player1)) {
        gameOn = false;
        window.alert("GAME OVER... TRY AGAIN")
        if (window.confirm("DO YOU WANT TO PLAY AGAIN...")) {
            window.location.reload()
        } else {
            window.close()
        }
    }
    if (isCollided(player1, destination1)) {
        gameOn = false;
        window.alert("CONGRATULATIONS ! YOU WON ")
        if (window.confirm("DO YOU WANT TO PLAY AGAIN...")) {
            window.location.reload()
        } else {
            window.close()
        }
    }
    requestAnimationFrame(gameLoop)
}
gameLoop()

gameboxCanvas.addEventListener("mousedown", () => {
    player1.speed = 7;
})
gameboxCanvas.addEventListener("mouseup", () => {
    player1.speed = 0;
})

function isCollided(box1, box2) {
    return !(((box1.y + box1.size) < (box2.y)) ||
        (box1.y > (box2.y + box2.size)) ||
        ((box1.x + box1.size) < box2.x) ||
        (box1.x > (box2.x + box2.size))
    )
}