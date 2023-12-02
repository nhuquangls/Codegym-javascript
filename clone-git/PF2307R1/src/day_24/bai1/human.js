class Human {
    name
    gender
    weight

    constructor(name, gender, weight) {
        this.name = name
        this.gender = gender
        this.weight = weight
    }

    isMale() {
        return this.gender
    }

    setGender(gender) {
        this.gender = gender
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getWeight() {
        return this.weight
    }

    setWeight(weight) {
        this.weight = weight
    }

    say(string) {
        console.log(this.name + " đang nói là: " + string)
    }

    checkApple(apple) {
        return apple.isEmpty()
    }

    eat(apple) {
        if (!apple.isEmpty()) {
            apple.decrease()
            this.weight = this.weight + 1
        } else {
            console.log("Hết táo rồi");
        }
    }
}