var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/basic.html');
});

var msg = {hello: 안녕하세요, study: 공부합시다, bye: 안녕히가세요}
io.on('connection', function( socket ){
    console.log( 'server socket connected' );
    socket.on('send', function(data){
        console.log('client: ', data)
        socket.emit('response', data + " : " + {msg})
    })
});

socket.on('hello', function(data){
    console.log(data);
    socket.emit('response', 'hello : 안녕하세요')
})

socket.on('study', function(data){
    console.log(data);
    socket.emit('response', 'study : 공부합시다' )
})

socket.on('bye', function(data){
    console.log(data);
    socket.emit('response', 'bye : 안녕히가세요' )
})

http.listen( 8080, function(req, res){
    console.log("server is listening: ", 8080)
});