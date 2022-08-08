const user = require('../model/index')

exports.post_index = (req, res) => {
    console.log( req.body );

    user.insert( req.body.id, req.body.pw, function( result ){
        console.log("result: ", result);
        res.send({ id: result });
    })
};