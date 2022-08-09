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
    var sql = "INSERT INTO visitor(name, comment) VALUES ('" + name + "', '" + comment + "')";
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;

        console.log( rows );    // insertId
        cb( rows.insertId );
    });
}

exports.get_visitor = (id, cb) => {
    // id 컬럼의 값이 id인 데이터를 1개만 검색한다. 
    console.log(id);
    cnn.query( `SELECT * FROM visitor where ID = '${id}' limit 1;`, (err, rows) => {
        if ( err ) throw err;
        console.log( rows )
        cb(rows);
    });
}

exports.update = (data, cb) => {
    let sql = `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`;
    // data.id 로 넘어온 값의 name, comment 업데이트 
    cnn.query( sql, ( err, rows ) => {
        if ( err ) throw err;
        cb(rows);
    })
}

exports.delete = (id, cb) => {
    console.log( id );
    let sql = `DELETE FROM visitor WHERE id=${id}`;
    console.log( sql );
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;
        cb(rows);
    });
}
