const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req,res) => {
    res.render("website");
});
app.listen(port, () => {
    console.log('Server port: ', port);
})