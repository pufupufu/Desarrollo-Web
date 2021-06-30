function template1() {
    const template = document.getElementById("template1");
    const content = template.content.cloneNode(true);
    document.body.append(content);
}

function template2() {
    const template = document.getElementById("template2");
    const content = template.content.cloneNode(true);
    document.body.append(content);
}

function lista3() {
    var valor = document.getElementsByClassName("lista3");
    var elem = document.getElementById("li3");
    if (valor.length > 0) {
        elem.innerHTML = "";
    } else {
        var array = ["La Plata", "Mar del Plata", "Necochea"];
        for (let index = 0; index < array.length; index++) {
            document.write("<li>" + array[index] + "</li>");
        }
    }
}