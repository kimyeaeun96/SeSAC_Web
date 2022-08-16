//const user = require('../model/index')
const models = require("../model")

exports.get_index = (req,res) => {
    res.render("first")
}
// exports.post_signup = (req,res) => {
//     user.post_signup(req.body, function(result){
//         console.log(result);
//         res.send(true);
//     });
// }
exports.post_signup = (req, res) => {
    let object = {
        id: req.body.id,
        pw: req.body.pw
    }
    models.User.create(object)
    .then((result) => {
        res.send({id: result.id});
    })
}

// exports.post_signin = (req,res) => {
//     user.post_signin(req.body.id, req.body.pw, function(result){
//         if ( result.length > 0 ) res.send(true); 
//         else res.send(false);
//     });
// }
exports.post_signin = (req, res) => {
    models.User.findOne({
        where: {id: req.body.id}
    }).then((result) => {
        console.log( result );

        if (req.body.pw == result.pw) {
            res.send(true);
            return
        }else{ res.send(false)}
    });
}

// exports.get_profile = (req, res) => {
//     res.render("index02")
// }
exports.get_profile = (req, res) => {
    models.User.findAll()
    .then((result) => {
        res.render("second", { data: result })
    })
}

// exports.profile_edit = (req,res) => {
//     user.update_profile(req.body, function(result){
//         res.send("회원정보 수정");
//     })
// }
exports.profile_edit = (req, res) => {
    let newObj = {
        id: req.body.id,
        pw: req.body.pw
    };
    models.User.update( newObj, { where: { id: req.body.id } } )
    .then((result) => {
        console.log(result);
        res.send('회원정보 수정')
    })
}

// exports.profile_delete = (req,res) => {
//     user.delete_user(req.body.id, function(result){
//         res.send("회원정보 탈퇴");
//     })
// }
exports.profile_delete = (req, res) => {
    models.User.destroy({
        where: {id: req.body.id}
    }).then((result) => {
        console.log(result);
        res.send("회원정보 탈퇴")
    })
}