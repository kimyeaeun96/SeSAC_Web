const fs = require("fs").promises; // .primises 지우고, fs.readFileSync 해도 된다.


/*
fs.readFile("./text.txt", function(err, data){
    if ( err ) throw err;             // throw err 하면 그대로 종료. else 하지 않는다. 
    else {
        console.log( data );    // buffer
        console.log( data.toString() );
    }
});


//fs.writeFile('./write.txt', "안녕")
//    .then(()=> {
//        console.log("작성 완료");
//    })
//    .catch((err) => {
//        console.log( err );
//   })


fs.copyFile("./write.txt", "./new.txt")    // 복사할 파일명, 복사한 새로운 파일명
    .then(()=>{
        console.log("복사완료");
    })
    .catch((err) => {
        console.log(err);
    });
*/

async function exec(){
    await fs.writeFile("./write.txt", "hello");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();