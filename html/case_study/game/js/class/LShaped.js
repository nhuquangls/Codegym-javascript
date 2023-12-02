class LShaped extends Shaped {
    constructor(color) {
        super(color);
        this.arrShaped = [new Box(220, 0, this.color),
        new Box(240, 0, this.color),
        new Box(260, 0, this.color),
        new Box(260, 20, this.color)];
        this.style = 1;
    }
    rotateShaped() {
        let temp1 = [new Box(this.arrShaped[0].xPosittion + 20, this.arrShaped[0].yPosittion - 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion - 20, this.arrShaped[2].yPosittion + 20, this.color),
        new Box(this.arrShaped[3].xPosittion - 40, this.arrShaped[3].yPosittion, this.color)];
        let temp2 = [new Box(this.arrShaped[0].xPosittion + 20, this.arrShaped[0].yPosittion + 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion - 20, this.arrShaped[2].yPosittion - 20, this.color),
        new Box(this.arrShaped[3].xPosittion, this.arrShaped[3].yPosittion - 40, this.color)];
        let temp3 = [new Box(this.arrShaped[0].xPosittion - 20, this.arrShaped[0].yPosittion + 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion + 20, this.arrShaped[2].yPosittion - 20, this.color),
        new Box(this.arrShaped[3].xPosittion + 40, this.arrShaped[3].yPosittion, this.color)];
        let temp4 = [new Box(this.arrShaped[0].xPosittion - 20, this.arrShaped[0].yPosittion - 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion + 20, this.arrShaped[2].yPosittion + 20, this.color),
        new Box(this.arrShaped[3].xPosittion, this.arrShaped[3].yPosittion + 40, this.color)];

        if (this.style == 1) {
            if (!isVar(temp1)) {
                this.arrShaped = temp1;
                this.style = 2;
            }
        } else if (this.style == 2){
            if (!isVar(temp2)) {
                this.arrShaped = temp2;
                this.style = 3;
            }
        } else if (this.style == 3){
            if (!isVar(temp3)) {
                this.arrShaped = temp3;
                this.style = 4;
            }
        } else {
            if (!isVar(temp4)) {
                this.arrShaped = temp4;
                this.style = 1;
            }
        }
    }
}