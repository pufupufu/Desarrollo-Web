function obtenerValorVerdad() {
    var nombre = document.getElementById('Nombre');
    var nombreValido = nombre.getAttribute('aria-invalid');

    var apellido = document.getElementById('Apellido');
    var apellidoValido = apellido.getAttribute('aria-invalid');

    var genero = document.getElementById('Genero');
    var generoValido = genero.getAttribute('aria-invalid');

    var anio = document.getElementById('Anio');
    var anioValido = anio.getAttribute('aria-invalid');

    var mes = document.getElementById('Mes');
    var mesValido = mes.getAttribute('aria-invalid');

    var dia = document.getElementById('Dia');
    var diaValido = dia.getAttribute('aria-invalid');

    var email = document.getElementById('Correo');
    var emailValido = email.getAttribute('aria-invalid');

    var telefono = document.getElementById('Telf');
    var telefonoValido = telefono.getAttribute('aria-invalid');

    var curso = document.getElementById('Curso');
    var cursoValido = curso.getAttribute('aria-invalid');

    // alert("Nombre: " + nombreValido);
    // alert("Apellido: " + apellidoValido);
    // alert("Genero: " + generoValido);
    // alert("Año: " + anioValido);
    // alert("Mes: " + mesValido);
    // alert("Dia: " + diaValido);
    // alert("Email: " + emailValido);
    // alert("Telefono: " + telefonoValido);
    // alert("Curso: " + cursoValido);

    if (nombreValido == "false" && apellidoValido == "false" && generoValido == "false" && anioValido == "false" && mesValido == "false" && diaValido == "false" && emailValido == "false" && telefonoValido == "false" && cursoValido == "false") {
        var retorno = true;
    } else {
        var retorno = false;
    }
    return retorno;
}

function validacion() {
    var valido = obtenerValorVerdad()
    if (valido) {
        vaciarCampos();
        limpiarBordes();
        alert("Datos cargados correctamente");
    }
}

// function verificarCampos() {
//     var valido = true;

//     //Verifico la validez del campo Nombre
//     var campo = document.getElementById('Nombre');
//     var valor = campo.value;
//     if (valor == "" || valor.match(/[0-9]/)) {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Apellido
//     campo = document.getElementById('Apellido');
//     valor = campo.value;
//     if (valor == "" || valor.match(/[0-9]/)) {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Genero
//     campo = document.getElementById('Genero');
//     valor = campo.value;
//     if (valor == "Género") {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Anio
//     campo = document.getElementById('Anio');
//     valor = campo.value;
//     if (isNaN(valor)) {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Mes
//     campo = document.getElementById('Mes');
//     valor = campo.value;
//     if (valor == "Mes") {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Dia
//     campo = document.getElementById('Dia');
//     valor = campo.value;
//     if (isNaN(valor)) {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Correo con una expresión regular
//     campo = document.getElementById('Correo');
//     valor = campo.value;
//     var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//     if (emailRegex.test(valor)) {
//         marcarCorrecto(campo);
//     } else {
//         marcarIncorrecto(campo);
//         valido = false;
//     }

//     //Verifico la validez del campo Telefono
//     campo = document.getElementById('Telf');
//     valor = campo.value;
//     if (valor == "" || isNaN(valor) || valor.length < 9) {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     //Verifico la validez del campo Curso
//     campo = document.getElementById('Curso');
//     valor = campo.value;
//     if (valor == "Cursos") {
//         marcarIncorrecto(campo);
//         valido = false;
//     } else {
//         marcarCorrecto(campo);
//     }

//     return valido;
// }

//Le agrego un borde rojo al campo con datos incorrectos
function marcarIncorrecto(campo) {
    campo.style.border = "4px solid red";
}

//Le agrego un borde verde al campo con datos correctos
function marcarCorrecto(campo) {
    campo.style.border = "4px solid green";
}

function desmarcar(campo) {
    campo.style.border = "1px solid black";
}

//Vacio todos los campos una vez se verificó la validez del formulario
function vaciarCampos() {
    document.getElementById('Nombre').value = "";
    document.getElementById('Apellido').value = "";
    document.getElementById('Correo').value = "";
    document.getElementById('Telf').value = "";
    document.getElementById('Razon').value = "";
    document.getElementById('Genero').value = "Género";
    document.getElementById('Anio').value = "Año";
    document.getElementById('Mes').value = "Mes";
    document.getElementById('Dia').value = "Dia";
    document.getElementById('Curso').value = "Cursos";
}

function limpiarBordes() {
    desmarcar(document.getElementById('Nombre'));
    desmarcar(document.getElementById('Apellido'));
    desmarcar(document.getElementById('Correo'));
    desmarcar(document.getElementById('Telf'));
    desmarcar(document.getElementById('Razon'));
    desmarcar(document.getElementById('Genero'));
    desmarcar(document.getElementById('Anio'));
    desmarcar(document.getElementById('Mes'));
    desmarcar(document.getElementById('Dia'));
    desmarcar(document.getElementById('Curso'));
}

function verificarNombre() {
    var nombre = document.getElementById('Nombre');
    if (nombre.value == "" || nombre.value.match(/[0-9]/)) {
        nombre.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(nombre);
    } else {
        nombre.setAttribute('aria-invalid', 'false');
        marcarCorrecto(nombre);
    }
}

function verificarApellido() {
    var apellido = document.getElementById('Apellido');
    if (apellido.value == "" || apellido.value.match(/[0-9]/)) {
        apellido.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(apellido);
    } else {
        apellido.setAttribute('aria-invalid', 'false');
        marcarCorrecto(apellido);
    }
}

function verificarGenero() {
    var genero = document.getElementById('Genero');
    if (genero.value == "Género") {
        genero.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(genero);
    } else {
        genero.setAttribute('aria-invalid', 'false');
        marcarCorrecto(genero);
    }
}

function verificarAnio() {
    var anio = document.getElementById('Anio');
    if (isNaN(anio.value)) {
        marcarIncorrecto(anio);
        anio.setAttribute('aria-invalid', 'true');
    } else {
        anio.setAttribute('aria-invalid', 'false');
        marcarCorrecto(anio);
    }
}

function verificarMes() {
    var mes = document.getElementById('Mes');
    if (mes.value == "Mes") {
        mes.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(mes);
    } else {
        mes.setAttribute('aria-invalid', 'false');
        marcarCorrecto(mes);
    }
}

function verificarDia() {
    var dia = document.getElementById('Dia');
    if (isNaN(dia.value)) {
        dia.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(dia);
    } else {
        dia.setAttribute('aria-invalid', 'false');
        marcarCorrecto(dia);
    }
}

function verificarEmail() {
    var email = document.getElementById('Correo');
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (!emailRegex.test(email.value)) {
        email.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(email);
    } else {
        email.setAttribute('aria-invalid', 'false');
        marcarCorrecto(email);
    }
}

function verificarTelefono() {
    var telefono = document.getElementById('Telf');
    if (telefono.value.match(/[A-Za-z]/) || telefono.value == "" || telefono.value.length < 9) {
        telefono.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(telefono);
    } else {
        telefono.setAttribute('aria-invalid', 'false');
        marcarCorrecto(telefono);
    }
}

function verificarCurso() {
    var curso = document.getElementById('Curso');
    if (curso.value == "Cursos") {
        curso.setAttribute('aria-invalid', 'true');
        marcarIncorrecto(curso);
    } else {
        curso.setAttribute('aria-invalid', 'false');
        marcarCorrecto(curso);
    }
}