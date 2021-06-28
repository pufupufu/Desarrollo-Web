function buttonClick() {
    var menuList = document.getElementById("content-index");
    var btn = document.getElementById('index-btn');
    if (menuList.className == "index-off") {
        menuList.className = "index-on";
        btn.innerHTML = "OCULTAR ÍNDICE";
    } else {
        menuList.className = "index-off";
        btn.innerHTML = "MOSTRAR ÍNDICE";
    }
}