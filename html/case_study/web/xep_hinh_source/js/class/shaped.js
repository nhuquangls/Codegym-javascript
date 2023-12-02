class Shaped {
    constructor() {
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, 200)`;
        this.arrShaped = [];
    }
    fillShaped() {
        this.arrShaped.forEach(element => {
            fillBox(element);
        });
    }

    moveLeft() {
        for (let i = 0; i < this.arrShaped.length; i++) {
            if (this.arrShaped[i].xPosittion === 0) {
                return;
            }
        }
        for (let i = 0; i < this.arrShaped.length; i++) {
            this.arrShaped[i].xPosittion -= 20;
        }
        if (isVar(this.arrShaped)) {
            for (let i = 0; i < this.arrShaped.length; i++) {
                this.arrShaped[i].xPosittion += quantityVarX;
            }
        }
    }
    moveRight() {
        for (let i = 0; i < this.arrShaped.length; i++) {
            if (this.arrShaped[i].xPosittion === 480) {
                return;
            }
        }
        for (let i = 0; i < this.arrShaped.length; i++) {
            this.arrShaped[i].xPosittion += 20;
        }
        if (isVar(this.arrShaped)) {
            for (let i = 0; i < this.arrShaped.length; i++) {
                this.arrShaped[i].xPosittion -= quantityVarX;
            }
        }
    }

    fixPosittion() {
        let maxLeft = this.arrShaped[0].xPosittion;
        for (let i = 1; i < this.arrShaped.length; i++) {
            if (this.arrShaped[i].xPosittion < maxLeft) {
                maxLeft = this.arrShaped[i].xPosittion;
            }
        }
        if (maxLeft < 0) {
            for (let i = 0; i < this.arrShaped.length; i++) {
                this.arrShaped[i].xPosittion -= maxLeft;
            }
        }
        let maxRight = this.arrShaped[0].xPosittion;
        for (let i = 1; i < this.arrShaped.length; i++) {
            if (this.arrShaped[i].xPosittion > maxRight) {
                maxRight = this.arrShaped[i].xPosittion;
            }
        }
        if (maxRight > 480) {
            maxRight = maxRight - 480;
            for (let i = 0; i < this.arrShaped.length; i++) {
                this.arrShaped[i].xPosittion -= maxRight;
            }
        }
        let maxBottom = this.arrShaped[0].yPosittion;
        for (let i = 1; i < this.arrShaped.length; i++) {
            if (this.arrShaped[i].yPosittion > maxBottom) {
                maxBottom = this.arrShaped[i].yPosittion;
            }
        }
        if (maxBottom > 480) {
            maxBottom = maxBottom - 460;
            for (let i = 0; i < this.arrShaped.length; i++) {
                this.arrShaped[i].yPosittion -= maxBottom;
            }
        }
    }
}