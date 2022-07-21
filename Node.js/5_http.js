const http = require("http");

const server = http.createServer( function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'}); // head를 200으로 보낸다. 성공, 실패사유에 따라 코드가 달라진다. 일반적으로 성공코드는 200
    res.write("<h1>hi</h1>") // 해당 내용을 적는다. 
    res.end("<p>안녕</p>"); // response를 해당 내용으로 "보낸다"
}); // 서버 생성

server.listen(8080, function(){
    console.log("8080번 포트");   // ACG 80
})

server.on( "request", function(){
    console.log("Client Request" );
})

server.on("connection", function(){
    console.log("Client Connection");
})

server.on("checkContinue", function(){
    console.log("Client checkContinue");
})
