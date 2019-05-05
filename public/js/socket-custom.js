var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos la conexión con el servidor');

});

//Enviar al servidor
socket.emit('enviarMensaje', {
    usuario: 'Katherine',
    mensaje: 'Hola'
}, function(resp) {
    console.log('respuesta server:', resp);
});

socket.on('enviarMensaje', (mensaje) => {

    console.log(mensaje);

});