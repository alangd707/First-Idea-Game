const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

function startGame() {
    document.getElementById('startMenu').style.display = 'none'
    canvas.style.display = 'block'
    drawButton(healthBar)
}

let healthBar = {
    x: 50,
    y: 50,
    width: 80,
    height: 20,
    color: "red"
}

function drawButton(name) {
    ctx.fillStyle = name.color;
    ctx.fillRect(name.x,name.y,name.width,name.height)
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4
    ctx.strokeRect(name.x, name.y, name.width, name.height)
}

