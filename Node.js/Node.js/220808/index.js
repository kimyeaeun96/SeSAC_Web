const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

// /visitor 경로에서, routes 폴더 불러온다.
const router = require('./routes');
app.use('/visitor', router);

app.get('/', (req, res) =>
    res.render("index")    
)

app.listen(port, () => {
    console.log('Server Port: ', port)
})
