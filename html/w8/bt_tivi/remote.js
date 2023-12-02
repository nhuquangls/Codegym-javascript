class Remote {
    code

    constructor(code) {
        this.code = code
    }

    turnOnOff(tivi) {
        tivi.status = !tivi.status
    }

    changeRoom(tivi) {
        let room = +prompt("Nhập kênh: ")
        tivi.changeRoom(room)
    }

    upVolume(tivi) {
        tivi.upVolume()
    }

    downVolume(tivi) {
        tivi.downVolume()
    }
}