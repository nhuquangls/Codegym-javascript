class SwitchButton {
    status
    lamp

    constructor(status) {
        this.status = status
    }

    connectToLamp(lamp) {
        this.lamp = lamp
    }

    switchOn() {
        if (this.lamp === undefined) {
            console.log("Kết nối với lamp trước!");
        } else {
            this.lamp.turnOn()
            this.status = true
        }
    }

    switchOff() {
        if (this.lamp === undefined) {
            console.log("Kết nối với lamp trước!");
        } else {
            this.lamp.turnOff()
            this.status = false
        }
    }
}