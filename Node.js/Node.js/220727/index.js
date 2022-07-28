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
    res.render("prc32-1");          
});
app.get("/first", function(req, res) {
    res.render("prc33");         
});

app.get("/first/receive", function(req, res){
    console.log(req.query);
    let name = req.query.name  + "GET";
    let gender = req.query.gender + "GET";
    let year = req.query.year + "GET";
    res.send( { name: name, gender: gender, year: year } );
});

app.post('/', function(req, res){
    let string = fs.readFileSync("./newinfo/info.txt").toString();
    let strArray = string.split("//")

    let ID = req.body.id
    let PW = req.body.pw
    if (ID === strArray[0] && PW === strArray[1]) {
        //로그인 성공시
        res.render("success")
    }else {
        //로그인 실패시
        res.render("failure")
    }}
)

app.listen(port, ()=>{
    console.log("Server port : ", port);
});
