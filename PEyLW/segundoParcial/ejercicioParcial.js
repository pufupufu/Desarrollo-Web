//Funcion invocada cuando se presiona el boton de registrar
function verificarFormulario() {
    var valido, tabla;
    valido = verificarCampos(); //Verifico la validez de todos los campos

    if (valido) { //Si todos los campos son validos, filtro la tabla a la que se enviarian los datos de la resenia
        var pelicula, director, anio, calificacion, opinion;
        pelicula = document.getElementById('txtPelicula').value;
        director = document.getElementById('txtDirector').value;
        anio = document.getElementById('txtAnio').value;
        calificacion = document.getElementById('txtCalificacion').value; //Tomo el valor de la calificacion
        opinion = document.getElementById('txtOpinion').value;
        datosResenia = "Pelicula: " + pelicula + "<br>Director: " + director + "<br>Estreno: " + anio + "<br>Calificacion: " + calificacion + "<br>Opinion: " + opinion + "<br>";

        if (parseInt(calificacion) >= 1 && parseInt(calificacion) <= 3) {
            tabla = document.getElementById('PMalas').innerHTML += datosResenia + "<hr>";
        } else if (parseInt(calificacion) >= 4 && parseInt(calificacion) <= 6) {
            tabla = document.getElementById('PRegulares').innerHTML += datosResenia + "<hr>";
        } else {
            tabla = document.getElementById('PBuenas').innerHTML += datosResenia + "<hr>";
        }
        //Llamo a la funcion que vacia los campos
        limpiarCampos();
    }
}

//Funcion que verifica uno por uno cada campo del formulario
function verificarCampos() {
    var campoActual, campoValido;
    campoValido = true; //Si todos los campos son correctos, nunca se modifica su valor de verdad

    //Verifico la validez del campo pelicula
    campoActual = document.getElementById('txtPelicula');
    if (campoActual.value == "") {
        colorearBorde(campoActual);
        campoValido = false;
    } else { //Saco el color del borde en caso de que haya estado mal antes
        limpiarBorde(campoActual);
    }

    //Verifico la validez del campo director
    campoActual = document.getElementById('txtDirector');
    if (campoActual.value == "") {
        colorearBorde(campoActual);
        campoValido = false;
    } else { //Saco el color del borde en caso de que haya estado mal antes
        limpiarBorde(campoActual);
    }

    //Verifico la validez del campo anio
    campoActual = document.getElementById('txtAnio');
    var fecha = new Date(); //Creo una variable con la fecha actual
    var anioActual = fecha.getFullYear(); //Tomo el anio actual de la fecha creada
    if (campoActual.value == "" || isNaN(campoActual.value)) {
        colorearBorde(campoActual);
        campoValido = false;
    } else {
        if (parseInt(campoActual.value) < 1900 || parseInt(campoActual.value) > parseInt(anioActual)) {
            colorearBorde(campoActual);
            campoValido = false;
        } else { //Saco el color del borde en caso de que haya estado mal antes
            limpiarBorde(campoActual);
        }
    }

    //Verifico la validez del campo calificacion
    campoActual = document.getElementById('txtCalificacion');
    if (campoActual.value == "" || isNaN(campoActual.value)) {
        colorearBorde(campoActual);
        campoValido = false;
    } else {
        if (parseInt(campoActual.value) < 1 || parseInt(campoActual.value) > 10) {
            colorearBorde(campoActual);
            campoValido = false;
        } else { //Saco el color del borde en caso de que haya estado mal antes
            limpiarBorde(campoActual);
        }
    }

    //Verifico la validez del campo opinion
    campoActual = document.getElementById('txtOpinion');
    if (campoActual.value == "") {
        colorearBorde(campoActual);
        campoValido = false;
    } else { //Saco el color del borde en caso de que haya estado mal antes
        limpiarBorde(campoActual);
    }

    return campoValido; //Retorno la validez de los campos. En caso de que haya encontrado uno incorrecto no realiza la accion de listar
}

//Funcion que le pone un borde rojo a los campos que sean incorrectos
function colorearBorde(campo) {
    campo.style.borderColor = "red";
}

//Funcion que le saca el borde rojo a los campos que hubieran sido incorrectos
function limpiarBorde(campo) {
    campo.style.borderColor = "";
}

//Funcion que limpia los campos una vez se registró correctamente una resenia
function limpiarCampos() {
    document.getElementById('txtPelicula').value = "";
    document.getElementById('txtDirector').value = "";
    document.getElementById('txtAnio').value = "";
    document.getElementById('txtCalificacion').value = "";
    document.getElementById('txtOpinion').value = "";
}