class Game {
    constructor(name, img, source) {
        this.name = name;
        this.img = img;
        this.source = source;
    }
}

let listGame = [];
function addGame(object) {
    let data = `<div class="div-game">
                    <a href="${object.source}" style="text-decoration: none; color: inherit;">
                        <img src="${object.img}" alt="${object.name}">
                        <h3 class="title-game" style="font-size: 14px;">${object.name}</h3>
                    </a>
                </div>`;
    listGame.push(data);
}
function showGame(arrGame) {
    if (listGame.length === 0) return;
    document.getElementById("list-game").innerHTML = arrGame.join("");
}

addGame(new Game("Nông Trại Đại Chiến", "img/game_img/nong_trai.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Lofi Room", "img/game_img/lofiroom.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Mê Cung Đáng Sợ", "img/game_img/mecung.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Chơi Golf 3D", "img/game_img/golf.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Trường Học", "img/game_img/truonghoc.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Vẽ Đường Đỗ Xe", "img/game_img/ve_duong.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Vương Quốc Gió", "img/game_img/vuongquocgio.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Búp Bê Sát Nhân", "img/game_img/sat_thu.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Tô Màu Theo Số", "img/game_img/tomau.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Trả Thù Sếp Già", "img/game_img/trathusepgia.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Among Us", "img/game_img/amongus.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Bắn Hạ Kẻ Địch", "img/game_img/banhakedich.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Chiến Binh Thần Thoại", "img/game_img/chienbinhthanthoai.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Điệp Vụ Perry", "img/game_img/diepvuperry.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Người Que Đại Chiến", "img/game_img/nguoiquedaichien.jpg", "xep_hinh_source/xephinh.html"));
addGame(new Game("Xe Tăng Chiến Đấu", "img/game_img/xetangchiendau.jpg", "xep_hinh_source/xephinh.html"));
showGame(listGame);

let search = document.getElementById("search-icon");
let dataSearch = document.getElementById("search-input");
search.addEventListener("click", function () {
    search.classList.add("active");
    setTimeout(function () {
        search.classList.remove("active");
    }, 150);

    let arrSearch = [];
    for (let i = 0; i < listGame.length; i++) {
        if (dataSearch.value === "") return;
        if (listGame[i].toLowerCase().includes(dataSearch.value.toLowerCase())) {
            arrSearch.push(listGame[i]);
        }
    }
    if (arrSearch.length === 0) return;
    showGame(arrSearch);
});

dataSearch.addEventListener("change", function () {
    if (dataSearch.value === "") {
        showGame(listGame);
    }
});

let login = document.getElementById("login-background");
let noti = document.getElementById("noti-login");
let username = document.getElementById("username");
let password = document.getElementById("password");
let userLogged = false;
login.classList.add("hidden");
function formLogin() {
    if (userLogged) return;
    login.classList.remove("hidden");
    noti.classList.add("hidden");
    username.value = "";
    password.value = "";
}
function cancelLogin() {
    login.classList.add("hidden");
    noti.classList.add("hidden");
}
function enterLogin() {
    if (username.value !== "admin" && password.value !== "admin") {
        noti.classList.remove("hidden");
    } else {
        cancelLogin();
        logged();
    }
}
function logged() {
    document.getElementById("info").innerHTML = username.value;
    userLogged = true;
}