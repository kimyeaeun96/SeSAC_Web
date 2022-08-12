const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { resourceLimits } = require('worker_threads');
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser('1234'));  // app.use(bodyParser());
app.use(session({
    secret: 'secret key', // 암호화
    // resave: false, // 덮어쓸지 말지. false: 덮어쓰지 않는다. // 세션은 만료기간이 없다.
    // saveUninitialized: true  // 초깃값을 설정하지 않아도 미리 세션을 만들어놓는다. 
}))

app.get("/login", (req, res) => {
    res.render('login');
})

app.post("/login", (req, res) => {
    var flag = true;
    if ( flag ) {
        req.session.id = req.body.id;
        res.redirect("profile")
    } else res.redirect('/login');
});
app.get('/profile', (req, res) => {
    if (req.session.id == undefined || req.session.id == "" ){
        res.redirect("/login");
        return false
    }
    //req.session.id 로 작업~
    res.render('profile');
})
app.get('/main', (req, res) => {

})