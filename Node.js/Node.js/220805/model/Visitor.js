const mysql = require('mysql');
const cnn = mysql.createConnection({   // createConnection() : db 연결 함수
    host: 'localhost',    // ip 주소도 가능
    user: 'user',
    password: '1234',
    database: 'sesac'     //다른 db에 접근 불가    
});

exports.get_visitors = (cb) => {    // cnn 콜백함수
    cnn.query('SELECT * FROM visitor', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb(rows);
    });
}
exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor(name, comment) VALUES ('" + name + "', '" +comment + "')";
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;

        console.log( rows );    // insertId
        cb( rows.insertId );
    });
}

