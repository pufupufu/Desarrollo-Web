function acciones() {
    minuscula();
    mayuscula();
    subMensaje();
    cadHola();
    sinEspacios();
    traducido();
}

function minuscula() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('minuscula');
    salida.innerHTML += "Mensaje en minuscula: " + mensaje.value.toLowerCase() + "\n";
}

function mayuscula() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('mayuscula');
    salida.innerHTML += "Mensaje en mayuscula: " + mensaje.value.toUpperCase() + "\n";
}

function subMensaje() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('sub-mensaje');
    salida.innerHTML += "Substring 5 a 15: " + mensaje.value.substring(15, 5);
}

function cadHola() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('cad-hola');
    if (mensaje.value.indexOf("Hola") != -1) {
        salida.innerHTML += "Hola que tal\n";
    } else {
        salida.innerHTML += "Saluda puto\n";
    }
}

function sinEspacios() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('sin-espacios');
    salida.innerHTML += mensaje.value.replace(/ /g, "") + "\n";
}

function traducido() {
    var mensaje = document.getElementById('mensaje');
    var salida = document.getElementById('traducido');
    mensaje = mensaje.value.replace("Hola", "Hello");
    mensaje = mensaje.replace("buenas", "good");
    mensaje = mensaje.replace("tardes", "afternoon");
    salida.innerHTML += mensaje + "\n";
}