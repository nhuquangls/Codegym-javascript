class SquareShaped extends Shaped {
    constructor(color) {
        super(color);
        this.arrShaped = [new Box(220, 0, this.color),
                          new Box(240, 0, this.color),
                          new Box(220, 20, this.color),
                          new Box(240, 20, this.color)];
    }
    rotateShaped() {
        return;
    }
}