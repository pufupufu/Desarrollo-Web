function anios() {
    var campo = document.getElementById('Anio');
    for (let index = 2003; index >= 1950; index--) {
        campo.innerHTML += "<option>" + index + "</option>";
    }
}

function meses() {
    var campo = document.getElementById('Mes');
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    for (let index = 0; index < meses.length; index++) {
        campo.innerHTML += "<option>" + meses[index] + "</option>";
    }
}

function dias() {
    var anio = document.getElementById('Anio').value;
    var mes = document.getElementById('Mes').value;
    var cantDias = 0;
    if (!isNaN(anio) && mes != "Mes") {
        if (anio % 4 == 0) {
            if (mes == "Febrero") {
                var cantDias = 29;
            } else {
                if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
                    cantDias = 31;
                } else {
                    cantDias = 30;
                }
            }
        } else {
            if (mes == "Febrero") {
                cantDias = 28;
            } else if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" || mes == "Diciembre") {
                cantDias = 31;
            } else {
                cantDias = 30;
            }
        }
    }

    campo = document.getElementById('Dia');
    campo.innerHTML = "<option>" + "Dia" + "</option>";
    for (let index = 1; index <= cantDias; index++) {
        campo.innerHTML += "<option>" + index + "</option>";
    }
}