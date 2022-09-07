var express = require('express');
var app = express();
var http = require('http').Server( app );
var io = require('socket.io')(http);

app.get('/', function(req, res){
    console.log('client');
    res.sendFile(__dirname + '/chat.html');
});
// io ->  클라의 모든 연결을 갖고 있다.
// socket > 클라 한 명. socket.id 클라이언트를 구별하는 식별자 
io.on('connection', function(socket){
    console.log("connected", socket.id);
    socket.emit('info', socket.id);
    io.emit("notice", socket.id + "님이 입장하셨습니다."); // 모든 사람에게 socket.id 뿌린다.
    socket.on('send', function(data){
        // data = { id: ~~~, msg: ~~~ }
        console.log('client message: ', data.msg);
        io.emit('newMessage', data); // 모든 애들에게 전송
    });

    socket.on('disconnect', function(){
        io.emit('notice', socket.id + "님이 퇴장하셨습니다.");
    })
});

http.listen( 8000, function(){
    console.log('Server port: ', 8000);
});