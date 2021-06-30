function datosPersonales() {
    var nombre, apellido, estadoCivil, edad, fechaNac, dni;
    nombre = "Nombre: Juan";
    apellido = "Apellido: Perez";
    estadoCivil = "Estado civil: soltero";
    edad = "Edad: 44";
    fechaNac = "Fecha de nacimiento: 1/1/1980";
    dni = "DNI: 33333333";
    document.write(nombre + "<br>" + apellido + "<br>" + estadoCivil + "<br>" + edad + "<br>" + fechaNac + "<br>" + dni + "<br>");
}

function datosPersonales2() {
    arrayDatos = ["Nombre: Juan", "Apellido: Perez", "Estado civil: soltero", "Edad: 44", "Fecha de nacimiento: 1/1/1980", "DNI: 33333333"];
    document.write("<ul>");
    for (let index = 0; index < arrayDatos.length; index++) {
        document.write("<li>" + arrayDatos[index] + "</li>");
    }
    document.write("</ul>");
}