function mostrarFecha() {
    var fecha = new Date();
    salida = document.getElementById('fecha');
    salida.innerHTML += fecha + "<br>";
}

function mostrarTiempoParcial() {
    var fecha = new Date();
    var fechaParcial = new Date(2021, 05, 15, 17, 00, 00);
    var salida = document.getElementById('tiempo-restante');
    const diffTime = Math.abs(fechaParcial - fecha);
    const diffDays = Math.ceil(diffTime / (1000 * 60));
    console.log(diffTime + " milliseconds");
    salida.innerHTML += "Faltan " + diffDays + " minutos<br>";
}

function calcularEdad() {
    var anioNacimiento = document.getElementById('edad').value;
    var fecha = new Date();
    var anio = fecha.getFullYear();
    var edad = parseInt(anio) - parseInt(anioNacimiento);
    var salida = document.getElementById('mostrarEdad');
    salida.innerHTML += "Usted tiene " + edad + " años<br>";
}