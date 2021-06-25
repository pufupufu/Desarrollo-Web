function validacion() {
    var valido = verificarCampos();
    if (valido) {
        vaciarCampos();
        location.replace("../index.html");
        alert("Datos cargados correctamente");
    }
}

function verificarCampos() {
    var valido = true;

    //Verifico la validez del campo Nombre
    var campo = document.getElementById('Nombre');
    var valor = campo.value;
    if (valor == "" || valor.match(/[0-9]/)) {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    //Verifico la validez del campo Apellido
    campo = document.getElementById('Apellido');
    valor = campo.value;
    if (valor == "" || valor.match(/[0-9]/)) {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    //Verifico la validez del campo Genero
    campo = document.getElementById('Genero');
    valor = campo.value;
    if (valor == "Género") {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    campo = document.getElementById('Anio');
    valor = campo.value;
    if (isNaN(valor)) {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    campo = document.getElementById('Mes');
    valor = campo.value;
    if (valor == "Mes") {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    campo = document.getElementById('Dia');
    valor = campo.value;
    if (isNaN(valor)) {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    campo = document.getElementById('Correo');
    valor = campo.value;
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (emailRegex.test(valor)) {
        desmarcar(campo);
    } else {
        marcarIncorrecto(campo);
        valido = false;
    }

    campo = document.getElementById('Telf');
    valor = campo.value;
    if (valor == "" || isNaN(valor)) {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    campo = document.getElementById('Curso');
    valor = campo.value;
    if (valor == "Cursos") {
        marcarIncorrecto(campo);
        valido = false;
    } else {
        desmarcar(campo);
    }

    return valido;
}

function marcarIncorrecto(campo) {
    campo.style.border = "2px solid red";
}

function desmarcar(campo) {
    campo.style.borderColor = "";
}

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