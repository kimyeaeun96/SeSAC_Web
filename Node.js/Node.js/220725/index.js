const express = require('express');
const app = express();
const port = 8080; 
const bodyParser = require("body-parser"); //body-parser: post로 정보전송할 때 body로 받을 수 있게 한다.
const fs = require("fs").promises;

app.set( "view engine", "ejs" );
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() ); // body-parser로 받을 때, json 형태로 받겠다.

app.get("/", function(req, res){
    res.render("login");
});

app.get("/receive", function(req, res){
    console.log( req )
    console.log( req.query )
    console.log("receive", req.query);
    res.render("receive", req.query);
});

app.post("/receive", function(req, res){
    // console.log( req )
    console.log( req.body );
    // console.log("receive", req.body);
    const {id , name, pw} = req.body;
    fs.writeFile("./newfolder/info.txt", id+"//"+name+"//"+pw);
    res.render("receive", req.body);
});


app.listen(port,()=>{
    console.log("Server port : ", port);
});
