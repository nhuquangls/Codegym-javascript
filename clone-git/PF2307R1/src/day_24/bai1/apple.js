class Apple {
    weight

    constructor(weight) {
        this.weight = weight
    }

    getWeight() {
        return this.weight
    }

    decrease() {
        this.weight = this.weight - 1
    }

    isEmpty() {
        return this.weight === 0
    }
}