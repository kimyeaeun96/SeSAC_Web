function user(id, pw, cb){
    setTimeout(()=>{
        console.log("사용자 입장");
        cb(id);
    }, 3000);
}

function getVideo(id, cb){
    setTimeout(()=>{
        cb(user);
    })
}

login("kim","1234", user=>{
    console.log("user님 환영합니다.");
    getVideo(lalala);
        console.log()        
})