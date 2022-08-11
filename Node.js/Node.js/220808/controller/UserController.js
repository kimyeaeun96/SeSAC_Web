// user 변수 사용시 [model] - index.js 
const user = require('../model/index')

// get_index 실행 -> [view] - index.ejs 렌더
exports.get_index = (req,res) => {
    res.render("index");
}

// post_signup: req.body: [views] - index.ejs - body, axios)/  res: function(result){~} -> result 매개변수에 rows 값 들어옴. 
exports.post_signup = (req,res) => {
    user.post_signup(req.body, function(result){
        console.log(result);
        res.send(true);
    });
}
// post_signin: req.body.id, req.body.pw : [views] - index.ejs - body.id, body.pw, axios -> response: function(result){~}
exports.post_signin = (req,res) => {
    user.post_signin(req.body.id, req.body.pw, function(result){
        if ( result.length > 0 ) res.send(true); // 해당 id와 pw에 대해 SELECT 되면 1줄이니까 result.length > 0 에 부합한다. 만약 id, pw가 틀려 SELECT 할 수 없다면 0이기 때문에 res.send(false)
        else res.send(false);
    });
}
exports.get_profile = (req, res) => {
    res.render("index02")
}
// get_user에서 res.render("index02")를 해야 화면이 나오는데, 서버에서 get 할 수 없다고 나와서 결국 위에 따로 res.render를 해줬다. 
exports.profile = (req,res) => {
    user.get_user(req.body.id, function(result){
        if ( result.length > 0 ) res.render("index02", {data: result[0]});   
        else res.send(false);
    })
}

exports.profile_edit = (req,res) => {
    user.update_profile(req.body, function(result){
        res.send("회원정보 수정");
    })
}

exports.profile_delete = (req,res) => {
    user.delete_user(req.body.id, function(result){
        res.send("회원정보 탈퇴");
    })
}