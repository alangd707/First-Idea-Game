const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');
const imgFolder = document.getElementById('item-storage')
const createImg = document.createElement('img')
// Where all the objects will be stored for future use.

let testDummy = {
    imgFile: "./img/testDummy.png",
    HP: 100,
    DPS: 5
}

function startGame() {
    document.getElementById('startMenu').style.display = 'none';
    canvas.style.display = 'block';
    fightDummy();
}

function fightDummy() {
    // Starting change of graphics
    ctx.strokeStyle = "white";
    ctx.lineWidth = 5;
    ctx.lineCap = 'square';

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(800, 300);
    ctx.stroke();

    ctx.strokeRect(300, 350, 200, 50);

    drawMob(testDummy)

    function drawMob(mobID) {
        createImg.src = mobID.imgFile
        createImg.id = 'mob-img'
        imgFolder.appendChild(createImg)
        ctx.drawImage(document.getElementById('mob-img'), 300, 75, 200, 150)
    }
}
