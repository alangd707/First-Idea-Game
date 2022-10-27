const canvas = document.getElementById('gameArea')
const ctx = canvas.getContext('2d')

function startGame() {
    document.getElementById('startMenu').style.display = 'none'
    canvas.style.display = 'block'
    fightDummy();
}

function fightDummy() {
    let x = canvas.width.x
    let y = canvas.width.y
    // Starting change of graphics
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.lineCap = 'square';

    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(800, 400);
    ctx.stroke();

    ctx.strokeRect(266., 330, 267, 50);

    // Variables of objects used
    let healthBar = {x: 0, y: 0, width: 80, height: 20, color: "red"};
    let testDummy = {width: 200, height: 50};
}

let healthBar = {
    x: 0,
    y: 0,
    width: 80,
    height: 20,
    color: "red"
}

function drawButton(name) {
    ctx.fillStyle = name.color;
    ctx.fillRect(name.x,name.y,name.width,name.height)
}