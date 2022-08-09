const Visitor = require("../model/Visitor");

exports.get_visitors = async (req,res) => {
    Visitor.get_visitors(function(result){
        console.log("result : ", result);   // result = rows
        console.log("index");
        res.render("index", { data: result });  
    }); 
}

exports.post_comment = (req, res) => {
    console.log( req.body );

    Visitor.insert( req.body.name, req.body.comment, function( result ) {
        res.send({ id: result });     // response...rep.data
    });
}

exports.get_visitor = (req, res) => {
    Visitor.get_visitor(req.query.id, function(result) {  // get 방식으로 얻은  id 를 보내면서 함수 처리한다. 모델에서도 id 받게 설정한다.
        console.log("result[0]: ", result[0]);
        res.send( {result: result[0]} ); // 검색된 하나의 데이터만 클라이언트에게 보낸다. 
    })
}

exports.patch_comment = (req, res) => {
    Visitor.update( req.body, function( result ){
        console.log( result );
        res.send( true );  // 업데이트가 이루어진 것에 대한 응답이기 때문에 true
    });
}

exports.delete_comment = (req, res) => {
    console.log( req.body );
    Visitor.delete( req.body.id, function(result){
        console.log( result );
        res.send("삭제 성공");
    });
}
