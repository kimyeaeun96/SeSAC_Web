var express = require('express');
var app = express();
var http = require('http').Server( app );
var io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + '/index.html');
});
//io = socket.io
io.on('connection', function(socket){
    console.log('connected');
    socket.emit('hello', 'server hello') // emit = write (이벤트명, 보내는 데이터) 클라이언트에서 hello 라고 받는다.
    socket.on('click', function(data){
        console.log('client click');
        socket.emit('clickResponse', 'success');
        io.emit('clickResponse', 'io success');
    })
}); // connect, disconnect 정해진 이벤트명. 

http.listen( 8000, function(){
    console.log('server port: ', 8000)
})