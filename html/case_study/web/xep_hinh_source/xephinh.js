let ctx = document.getElementById("myCanvas").getContext("2d");
let boxes = []
function fillBox(box) {
    ctx.fillStyle = box.color
    ctx.strokeStyle = "black"
    ctx.fillRect(box.xPosittion, box.yPosittion, box.width, box.height);
    ctx.strokeRect(box.xPosittion, box.yPosittion, box.width, box.height);
}
let currentShaped;
let isGameOver = true;
let score = 0;
let speed = 0.5;
createNewShaped();

function fillAll() {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 20; i < 500; i += 20) {
        ctx.strokeStyle = "gainsboro";
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 500);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(500, i);
        ctx.stroke();
    }
    currentShaped.fillShaped();
    boxes.forEach(element => {
        fillBox(element);
    });
    document.getElementById("score").innerHTML = "Score: " + score
}
function rotate() {
    currentShaped.rotateShaped();
    currentShaped.fixPosittion();
    fillAll();
}
function moveLeft() {
    currentShaped.moveLeft();
    fillAll();
}
function moveRight() {
    currentShaped.moveRight();
    fillAll();
}

function start() {
    if (!isGameOver) return;
    audio.play();
    isGameOver = false;
    moveDown();
}

function moveDown() {
    let shapedVar = false;
    if (isGameOver) return;
    for (let i = 0; i < currentShaped.arrShaped.length; i++) {
        currentShaped.arrShaped[i].yPosittion += speed;
        fillAll();
    }
    for (let i = 0; i < currentShaped.arrShaped.length; i++) {
        if (currentShaped.arrShaped[i].yPosittion >= 480) {
            shapedVar = true;
            quantityVarY = currentShaped.arrShaped[i].yPosittion - 480;
            break;
        }
        if (isVar(currentShaped.arrShaped)) {
            shapedVar = true;
            break;
        }
    }
    if (shapedVar) {
        if (superSpeed) {
            speed -= 15;
            superSpeed = false;
        }
        currentShaped.arrShaped.forEach(object => {
            object.yPosittion -= quantityVarY;
            boxes.push(object)
        });
        createNewShaped();
        updateScore();
    }
    if (gameOver()) {
        alert("Game Over")
    }
    fillAll();
    requestAnimationFrame(moveDown);
}
let superSpeed = false;
function speedUp() {
    if (superSpeed) return;
    speed += 15;
    superSpeed = true;
}

function gameOver() {
    if (isVar(currentShaped.arrShaped) && currentShaped.arrShaped[0].yPosittion <= 0) {
        isGameOver = true;
        audio.pause();
        return true;
    }
    return false;
}
function createNewShaped() {
    let number = Math.floor(Math.random() * 5);
    if (number === 0) {
        currentShaped = new SquareShaped();
    } else if (number === 1) {
        currentShaped = new LShaped();
    } else if (number === 2) {
        currentShaped = new IShaped();
    } else if (number === 3) {
        currentShaped = new TShaped();
    } else {
        currentShaped = new ZShaped();
    }
    for (let i = 0; i < Math.floor(Math.random() * 3); i++) {
        currentShaped.rotateShaped();
    }

}
function updateScore() {
    if (boxes.length === 0) return;
    let deletedCount = 0;
    for (let i = 480; i >= 0; i -= 20) {
        let temp = [];
        let count = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j].yPosittion === i) {
                count++;
            } else {
                temp.push(boxes[j]);
            }
        }
        if (count === 25) {
            audio2.play();
            score += 100;
            speed += 0.25;
            boxes = temp.map(function (object) {
                if (object.yPosittion < i) {
                    object.yPosittion += 20;
                }
                return object;
            });
            i += 20;
            deletedCount++;
        }
        if (deletedCount === 4) break;
    }
}

function audioControl() {
    let volume = document.getElementById("volume");
    if (volume.src.includes("img/volume.png")) {
        volume.src = "./img/mute.png";
        audio.pause();
    } else {
        volume.src = "./img/volume.png";
        audio.play();
    }
}

