const io = require('socket.io').listen(3000);
console.log('socket server run...');

let count = 1;
io.sockets.on('connection', function (socket) {
    console.log('user connected: ', socket.id);
    var name = "user" + count++;
    io.to(socket.id).emit('change name',name);

    socket.on('disconnect', function(){
        console.log('user disconnected: ', socket.id);
    });

    socket.on('send message', function(name,text){
        var msg = name + ' : ' + text;
        console.log(msg);
        io.emit('receive message', msg);
    });
});
