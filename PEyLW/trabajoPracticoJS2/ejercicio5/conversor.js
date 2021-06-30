function conversor() {
    var valor, opcion, resultado;
    alert(
        "1: Peso a dolar \n2: Dolar a peso \n3: Peso a real \n4: Real a peso \n5: Peso a euro \n6: Euro a peso"
    );

    opcion = prompt("Introduzca una opcion: ");
    valor = prompt("Introduzca un valor: ");
    opcion = parseInt(opcion);

    switch (opcion) {
        case 1:
            document.write("Peso a dolar:<br>");
            resultado = valor * 0.01;
            document.write(valor + " = " + resultado);
            break;
        case 2:
            document.write("Dolar a peso:<br>");
            resultado = valor * 95.25;
            document.write(valor + " = " + resultado);
            break;
        case 3:
            document.write("Peso a real:<br>");
            resultado = valor * 0.053;
            document.write(valor + " = " + resultado);
            break;
        case 4:
            document.write("Real a peso:<br>");
            resultado = valor * 18.82;
            document.write(valor + " = " + resultado);
            break;
        case 5:
            document.write("Peso a euro:<br>");
            resultado = valor * 0.0087;
            document.write(valor + " = " + resultado);
            break;
        case 6:
            document.write("Euro a peso:<br>");
            resultado = valor * 115.45;
            document.write(valor + " = " + resultado);
            break;
        default:
            alert("OPCION INVALIDA");
            break;
    }
}