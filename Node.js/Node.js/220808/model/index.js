const mysql = require('mysql');
const cnn = mysql.createConnection({   //  MySQL DB 접근: sesac 데이터베이스 - 새로운 유저를 만든다. 
    host: 'localhost',   
    user: 'user',
    password: '1234',
    database: 'sesac'    
});

// post_signup: 파라미터 data ([UserController] - exports.post_signup), cb문 ( function(err, rows){~} )
exports.post_signup = (data, cb) => { 
    let sql = `INSERT INTO user VALUES('${data.id}','${data.pw}');`; // ${} 입력받은 id, pw를 넣는다. 
    cnn.query( sql, function(err, rows){  // mysql 콜백함수 정의할때: cnn.query(){}  sql -> rows  
        if ( err ) throw err;
        cb(rows);
    });
}
// post_signin: id, pw를 파라미터로 받는다. cb문 ( function(err, rows){~})
exports.post_signin = (id, pw, cb) => {
    let sql = `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
    cnn.query( sql, function(err, rows){
        if ( err ) throw err;
        cb(rows);
    });
}

exports.update_profile = (data, cb) => {
    let sql = `UPDATE user SET pw='${data.pw}' WHERE id='${data.id}'`;
    cnn.query( sql, ( err, rows ) => {
        if ( err ) throw err;
        cb( rows );
    });

}

exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM user WHERE id='${id}'`, (err, rows) => {
        if ( err ) throw err;
        cb(rows);
    });
}