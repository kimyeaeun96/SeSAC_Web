const mysql = require('mysql');
const cnn = mysql.createConnection({   
    host: 'localhost',   
    user: 'user',
    password: '1234',
    database: 'sesac'    
});

exports.get_index = (cb) => {
    cnn.query('SELECT * FROM prc46', (err, rows) => {
        if ( err ) throw err;
        console.log( rows );
        cb(rows);
    });
}

exports.insert = (id, pw, cb) => {
    var sql = "INSERT INTO visitor(id, pw) VALUES ('" + id + "', '" + pw + "')";
    cnn.query(sql, (err, rows) => {
        if ( err ) throw err
        res.send(rows)
    })

}

