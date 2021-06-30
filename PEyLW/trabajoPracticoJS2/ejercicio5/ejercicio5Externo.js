function suma() {
    var x, y, resultado, salida;
    x = prompt("x = ");
    y = prompt("y = ");
    resultado = parseInt(x) + parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + " + " + y + " = " + resultado + "\n";
}

function resta() {
    var x, y, resultado, salida;
    x = prompt("x = ");
    y = prompt("y = ");
    resultado = parseInt(x) - parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + " - " + y + " = " + resultado + "\n";
}

function division() {
    var x, y, resultado, salida;
    x = prompt("x = ");
    y = prompt("y = ");
    resultado = parseInt(x) / parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + " / " + y + " = " + resultado + "\n";
}

function multiplicacion() {
    var x, y, resultado, salida;
    x = prompt("x = ");
    y = prompt("y = ");
    resultado = parseInt(x) * parseInt(y);
    salida = document.getElementById("salida");
    salida.value += x + " * " + y + " = " + resultado + "\n";
}

function potencia() {
    var x, y, resultado, salida;
    x = prompt("x = ");
    y = prompt("y = ");
    resultado = Math.pow(x, y);
    salida = document.getElementById("salida");
    salida.value += x + " ^ " + y + " = " + resultado + "\n";
}

function cuadrado() {
    var x, resultado, salida;
    x = prompt('x = ');
    resultado = parseInt(x) * parseInt(x);
    salida = document.getElementById("salida");
    salida.value += x + "^2 = " + resultado + "\n";
}

function factorial() {
    var x, resultado, salida;
    x = prompt('x = ');
    resultado = factorialRecursivo(x);
    salida = document.getElementById("salida");
    salida.value += x + "! = " + resultado + "\n";
}

function factorialRecursivo(x) {
    var retorno;
    if (x == 0) {
        retorno = 1;
    } else {
        retorno = x * factorialRecursivo(x - 1);
    }
    return retorno;
}