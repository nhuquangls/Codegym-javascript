let quantityVarX = 0;
let quantityVarY = 0;
function checkVar(box1, box2) {
    let distanceX = box1.xPosittion - box2.xPosittion;
    let distanceY = box1.yPosittion - box2.yPosittion;
    if (distanceX < 0) {
        distanceX = -distanceX;
    }
    if (distanceY < 0) {
        distanceY = -distanceY;
    }
    quantityVarX = 20 - distanceX;
    quantityVarY = 20 - distanceY;
    return distanceX < 20 && distanceY < 20;
}

function isVar(arr) {
    if (boxes.length === 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < boxes.length; j++) {
            if (checkVar(boxes[j], arr[i])) {
                console.log(quantityVarY);
                return true;
            }
        }
    }
    return false;
}