function verificarContrasenia() {
    var contrasenia = prompt("Ingrese su clave de acceso: ");

    if (contrasenia === "minombre") {
        document.write("Datos Personales<br>Nombre: Santiago<br>Apellido: Scantamburlo<br>Fecha de nacimiento: 02/07/1999<br>")
    } else {
        document.write("Contrasenia incorrecta<br>");
    }
}

function ingresarValor() {
    var valor = prompt("Ingrese un valor: ");
    if (valor < 0) {
        document.write("-1");
    } else if (valor >= 0 && valor < 10) {
        document.write("0");
    } else if (valor >= 10 && valor < 50) {
        document.write("1");
    } else if (valor >= 50 && valor < 100) {
        document.write("2");
    } else {
        document.write("3");
    }
}