class Tivi {
    room
    volume
    status

    constructor(room, volume, status) {
        this.room = room
        this.volume = volume
        this.status = status
    }

    changeRoom(room) {
        if (this.status) {
            this.room = room
        } else {
            console.log("Bật tivi trước!");
        }
    }

    upVolume() {
        if (this.status) {
            this.volume = this.volume + 1
        } else {
            console.log("Bật tivi trước!");
        }
    }

    downVolume() {
        if (this.status) {
            this.volume = this.volume - 1
        } else {
            console.log("Bật tivi trước!");
        }
    }
}