/*
#promise 방식
const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( async function(req, res){
    try {
        const data = await fs.readFile('./worm.html');
        res.writeHead(200);
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8080, function(){
    console.log("8080번 포트"); 
})
*/
//callback 방식
const http = require('http');
const fs = require('fs');

const server = http.createServer( function(req, res){
    fs.readFile('./worm.html', function ( err, data ){
        if( err ){
             //promise 에서의 catch
             console.error(err);
             res.writeHead(404);
             res.end(err.message);
        }
        else {
             // promise 에서의 try
             res.writeHead(200);
             res.end(data);
        }
    });
})

server.listen(8080, function(){
    console.log("8080번 포트"); 
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