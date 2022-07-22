const express = require('express');
const app = express();
const port = 8080;

app.set("view engine", "ejs"); //확장자가 ejs인 파일, view 폴더 안에 모아둔다.
//app.use( express.static( 'public' )); // publc 폴더는 정적파일을 관리하는 곳으로 선언!
app.use( '/abc/aa', express.static( 'public' ));  
// '/abc' 가상경로를 통해서만 public 폴더에 접속하겠다.  

app.get('/', (req, res) => {
     // db에서 정보를 가져왔다.
    res.render("prc29") // 확장자 쓸 필요 없다. 
});

app.listen(port, () => {
    console.log( 'server port : ', port );
})