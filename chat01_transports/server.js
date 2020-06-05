const io = require('socket.io').listen(3000);
console.log('Socket server run..!');

io.sockets.on('connection', (socket) => {
    socket.on('call', (data) => {
        console.log(data);
        socket.emit('answer', 'PHP connect..!');
    });
});