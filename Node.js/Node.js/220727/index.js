const express = require('express');
const app = express();
const port = 8080; 
const bodyParser = require("body-parser");
const fs = require("fs");

app.set( "view engine", "ejs" );
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() ); 

app.get("/", function(req, res) {
    res.render("prc32-1");          //뷰를 렌더링한다. 
});

app.get("/first", function(req, res) {
    res.render("prc33");          
});

app.get("/test", function(req, res) {
    res.send("test");            // 응답으로 데이터 보낸다. 그래야 클라이언트화면에서 요청 처리가 끝났음을 안다. 
});

app.get("/test2", function(req, res) {
    res.send({name: "test", message: 123});
});
/*
app.get("/receive", function(req, res){
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + "GET";
    res.send( { name: name, message: msg } );
});

app.get("/first/receive", function(req, res){
    console.log(req.query);
    let name = req.query.name;
    let msg = req.query.name + "GET";
    res.send( { name: name, message: msg } );
});
*/
app.post('/', function(req, res){
    let string = fs.readFileSync("./newinfo/info.txt").toString();
    console.log(string);
    let strArray = string.split("//")
    console.log(strArray[0], strArray[1], strArray[2])

    let ID = req.body.id
    let PW = req.body.pw
    if (ID === strArray[0] && PW === strArray[1]) {
        //로그인 성공시
        res.render("./success")
    }else {
        //로그인 실패시
        res.render("./failure")
    }}
)

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
