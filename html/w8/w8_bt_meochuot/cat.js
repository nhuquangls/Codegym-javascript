class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
        this.caught = 0;
    }
    sound() {
        console.log("meo meo");
    }
    catch(mouse) {
        if (this.maxSpeed > mouse.speed && this.caught == 0) {
            mouse.speed = 0;
            mouse.sound();
            this.sound();
        } else {
            console.log("Cannot catch");
        }
    }
    eat(mouse) {
        if (mouse.status && mouse.speed == 0) {
            this.weight += mouse.weight;
            mouse.weight = 0;
            mouse.status = false;
            this.caught = 0;
        }
    }
}