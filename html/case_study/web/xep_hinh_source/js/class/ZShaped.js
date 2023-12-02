class ZShaped extends Shaped {
    constructor(color) {
        super(color);
        this.arrShaped = [new Box(220, 20, this.color),
        new Box(240, 20, this.color),
        new Box(240, 0, this.color),
        new Box(260, 0, this.color)];
        this.style = 1;
    }
    rotateShaped() {
        let temp1 = [new Box(this.arrShaped[0].xPosittion + 20, this.arrShaped[0].yPosittion - 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion + 20, this.arrShaped[2].yPosittion + 20, this.color),
        new Box(this.arrShaped[3].xPosittion, this.arrShaped[3].yPosittion + 40, this.color)];
        let temp2 = [new Box(this.arrShaped[0].xPosittion -20, this.arrShaped[0].yPosittion + 20, this.color),
        new Box(this.arrShaped[1].xPosittion, this.arrShaped[1].yPosittion, this.color),
        new Box(this.arrShaped[2].xPosittion - 20, this.arrShaped[2].yPosittion - 20, this.color),
        new Box(this.arrShaped[3].xPosittion, this.arrShaped[3].yPosittion - 40, this.color)];

        if (this.style == 1) {
            if (!isVar(temp1)) {
                this.arrShaped = temp1;
                this.style = 2;
            }
        } else {
            if (!isVar(temp2)) {
                this.arrShaped = temp2;
                this.style = 1;
            }
        }
    }
}