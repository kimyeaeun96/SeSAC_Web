const express = require('express');
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));

const router = require('./routes')
app.use('/user', router)

app.get("/", function(req,res){
    res.render("index");
})

app.listen(port, () => {
    console.log('Server Port: ', port)
})
