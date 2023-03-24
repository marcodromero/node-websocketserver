
const socketController = (socket) =>{
    console.log('Cliente conectado', socket.id);
       
    socket.on('disconnect', () =>{
      console.log('Cliente desconectado');
    })

    socket.on('enviar-mensaje', (payload, callback)=>{ //el payload es lo que se recibe del cliente. El payload es el tercer argumento de socket.emit() en la parte del front
        const id= 123456;
        callback(id); //Este callback retornara información al cliente que envio el mensaje.
        
        socket.broadcast.emit('enviar-mensaje', payload ); //Envia mensaje a todos los clientes conectados
    })
}

module.exports = {
    socketController
}