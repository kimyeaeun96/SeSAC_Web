function call(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(name)
            resolve(name);
        }, 1000);
    })
}
function back(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("back")
            resolve("back");
        }, 1000);
    })
}
function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("여기는 callback hell");
        }, 1000);
    })
}

call("kim")
.then(function(name){
    console.log(name + "입니다");
    var b = back();
    console.log(b) // Promise { <pending> }
   //return back();
})
.then(function(txt){
    console.log(txt + "을 실행하셨군요.");
    return hell();
})
.then(function(message){
    setTimeout(function(){
        console.log(message)
    })
})