const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser('1234'));  // app.use(bodyParser());
app.use(session({
    secret: 'secret key', // 암호화
    // resave: false, // 덮어쓸지 말지. false: 덮어쓰지 않는다. // 세션은 만료기간이 없다.
    // saveUninitialized: true  // 초깃값을 설정하지 않아도 미리 세션을 만들어놓는다. 
}))

const cookieConfig = {
   // maxAge: 30000,
    path: '/',     // 패쓰가 / 이후인 애들만 쿠키를 볼 수 있다. 시작경로가 '/'. 특별한 경우에만 path 설정한다. 예) 자동로그인 설정-> /user 경로에서만 설정할 수 있다. 다른 경로에서 남용하지 않게.
    httpOnly: true,  // 기본값  false. true로 지정하면 도큐먼트에서 쿠키를 읽지 못한다. 클라이언트는 볼 수 없다. 콘솔에 찍히지 않음. 정보를 가공할 수 없다.
    signed: true,  // 쿠키 암호화. 기본경로에서 value 확인해보면 이상한거 붙어있음. 
}

app.get('/', (req, res) => {
    req.session.name = '홍길동';
    res.cookie('key', 'value', cookieConfig);   // name, value
    res.cookie('key2', 'value2', cookieConfig)
    res.render('index');
})

// 쿠키 세팅하지 않고 보는 것만
app.get('/get', (req, res) => {     
    console.log( req.session.name );
    //console.log( req );   // req: 클라이언트 화면에서 서버로 보내는 것. 
    console.log( req.cookies ); // req.cookies : cookies로 클라이언트 화면의 요청이 보내진다. 
    res.send( req.cookies );
}) 

app.get('/cookie', (req, res) => {
    res.render('cookie');
})

app.get('/destroy', (req, res) => {   
    //res.render()
    req.session.destroy(function(err){
        res.send('삭제')   // 연결된 모든 세션 지운다.
    })
    //req.session.name=""; / 특정 하나의 세션만 지운다. 빈값으로 바꾼다. "" 
})

app.listen(8000, () => {
    console.log('Server : ', 8000);
})