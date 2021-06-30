function recorrerFor() {
    var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    console.log((array[2]));

    for (i = 0; i < array.length; i++) {
        document.getElementById("meses").innerHTML += "<li>" + array[i] + "</li>";
        console.log((array[i]));
    }
}

function recorrerWhile() {
    var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var i = 0;

    console.log((array[2]));

    while (i < array.length) {
        document.getElementById("meses2").innerHTML += "<li>" + array[i] + "</li>";
        console.log((array[i]));
        i++;
    }
}

function recorrerDoWhile() {
    var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var i = 0;
    console.log((array[2]));
    do {
        document.getElementById("meses3").innerHTML += "<li>" + array[i] + "</li>";
        console.log((array[i]));
        i++;
    } while (i < array.length);
}

function recorrerForIn() {
    var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var i = 0;

    console.log((array[2]));
    for (i in array) {
        document.getElementById("meses4").innerHTML += "<li>" + array[i] + "</li>";
        console.log((array[i]));
    }
}

function mostrarPares() {
    var resultado;
    for (let index = 0; index < 500; index++) {
        if (index % 2 == 0) {
            resultado = index + " ";
            document.getElementById("pares").innerHTML += resultado;
        }
    }
}

function mostrarResultados() {
    var resultado;
    for (let index = 0; index < 100; index++) {
        resultado = (3 * parseInt(index)) + (5 - parseInt((index * index))) + " ";
        document.getElementById("resultados").innerHTML += resultado;
    }
}

function mostrarPrimos() {
    var prime = [];
    var cap = 100;
    for (var i = 2; i < cap; i++) {
        var num = isPrime(i);
        if (num) {
            prime.push(i);
        }
        if (prime.length < 25) {
            cap++;
        }
    }

    for (let index = 0; index < prime.length; index++) {
        document.getElementById("primos").innerHTML += prime[index] + " ";
    }
}

function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}