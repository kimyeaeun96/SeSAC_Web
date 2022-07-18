const fs = require("fs");

fs.readFile("./text.txt", (err, data) => {
    if (err) throw err;  // throw: error 출력

    console.log(data);    // buffer : 파일의 원형
    console.log(data.toString()); //  buffer를 string
});
 

