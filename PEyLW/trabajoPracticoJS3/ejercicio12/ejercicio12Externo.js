function listarComentarios() {
    var usuario = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    document.getElementById('mensaje').value = "";
    var fecha = new Date();
    var salida = document.getElementById('registroMensajes');
    salida.innerHTML += fecha + " por: " + usuario + "<br>" + mensaje + "<br>";
}