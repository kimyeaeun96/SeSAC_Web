const fs = require("fs");
const User = require("../model/User"); //User 파일을 가져온다. 

exports.index = (req,res) => {
    res.render("index");       //[views] - index.ejs 렌더링
}
exports.register = (req, res) => {
    res.render("register");
}
exports.post_register = (req, res) => {  // 회원가입한 정보가 model로 간다. 컨트롤러는 뷰와 모델 사이에서 소통.
    User.post_user(req.body) // 딕셔너리 자체로 불러온다. 하나하나씩 가져와도 된다.
    res.send( req.body );
}

exports.login = (req, res) => {
    res.render("login");
}

exports.post_login = async (req, res) => {
    var data = await User.get_user(); //  모델 - user - get_user함수 실행하겠다.
    // { "asdf", "asdf", "asdf", "asdf"}

    var infos = data.split("\n");
    // for ( let i = 0; i < infos.length; i++ ){
    //     // i = 0, infos[i] = "11/11/11/11";
    //     var info = infos[i].split("//");
    //      if ( info[0] == req.body.id && info[1] == req.body.pw ){
    //          res.send("성공")
    //          return false;
    //      }
    // }
    // res.send("실패");
    var flag = false;
    for ( let i = 0; i < infos.length; i++ ){
        var info = infos[i].split("//");
        if ( info[0] == req.body.id && info[1] == req.body.pw ) flag = true;
    }
    if (flag) res.send("성공");
    else res.send("실패");

//     var info = data.split("//");

// for (i=0; i >= 0; i++){
//     if ( info[i] == req.body.id && req.body.pw ){
//         res.send("로그인 성공");  
//     }else if ( info[i] != req.body.id || req.body.pw ){
//         res.send( "로그인 실패" )
//     }
// }}
}
