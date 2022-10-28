const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');

// Where all the objects will be stored for future use.
let playerStats = {
    HP: 100,
    DPS: 5,
}
let testDummy = {
    imgFile: "./img/testDummy.png",
    id: 'testDummy',
    HP: 50,
    DPS: 5,
}
function startGame() {
    document.getElementById('startMenu').style.display = 'none';
    canvas.style.display = 'block';
    fightDummy();
}
function fightDummy() {
    // Functions purely for loading graphics and calculating dmg etc.
    function startFight() {
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(800, 300);
        ctx.stroke();
    }
    function loadEnemy(mobId) {
        ctx.drawImage(document.getElementById(mobId.id), 300, 75, 200, 150);
        ctx.font = "30px Arial";
        ctx.fillStyle = 'red';
        ctx.textAlign = 'center';
        ctx.fillText(String(mobId.HP), 400, 265);
    }
    function loadPlayer() {
        ctx.fillRect(325, 313, playerStats.HP * 1.5, 13)
        ctx.strokeRect(300, 350, 200, 50);
    }
    function gameTick(mobId) {
        if (turn) {
            if (mobId.HP - playerStats.DPS <= 0) {
                mobId.HP = 0;
                console.log('Battle won!');
                clearInterval(game);
            }
            else {
                mobId.HP -= playerStats.DPS;
                turn = false;
            }
        }
        else {
            if (playerStats.HP - mobId.DPS <= 0) {
                playerStats.HP = 0;
                console.log('Battle lost!');
                clearInterval(game);
            }
            else {
                playerStats.HP -= mobId.DPS;
                turn = true;
            }
        }
        startFight(); loadEnemy(mobId); loadPlayer();
    }
    let turn = true;
    gameTick(testDummy)
    let game = setInterval( function() {gameTick(testDummy)}, 1000)
}