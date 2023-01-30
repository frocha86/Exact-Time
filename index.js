// Hora certa
function getTime() {
    var timeTxt = document.getElementsByClassName("hora")[0];
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    setTimeout
    //Add zero
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    //Html change
    timeTxt.innerHTML = `Agora são <strong>${h}:${m}:${s}</strong>`;
    setTimeout("getTime()", 1000)

}
function changeImg() {
    var date = new Date();
    var currentTime = date.getHours();
    var newImg = document.getElementsByClassName("img")[0]
    if (currentTime >= 5 && currentTime < 12) {
        document.body.style.backgroundColor = "#e2cd9f";
        newImg.src = "img/img-manha.jpg";
    } else if (currentTime >= 12 && currentTime < 18) {
        document.body.style.backgroundColor = "#b9846f";
        newImg.src = "img/img-tarde.jpg";
    } else if (currentTime >= 18 && currentTime < 24 || currentTime < 5) {
        document.body.style.backgroundColor = "#515154";
        newImg.src = "img/img-noite.jpg";
    }
    setTimeout("changeImg()", 1000*60*60)
}
