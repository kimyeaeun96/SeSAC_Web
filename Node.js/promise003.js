function call(name){
    var txt = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(name);
            resolve(name);
            // { name } { 'kim' }
        }, 1000);
    })
    //txt = Promise { 'kim' }
    return txt;
}
var a = new Promise((resolve, reject) =>{
    resolve("aa");
});
console.log(a);

function back(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("back");
            resolve("back");
        }, 1000);
    })
}

function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("callback hell")
        }, 1000);
    })
}

call('kim')
    .then(function(name){
        console.log(name+"반가워");
        var a = back();
 })
    .then(function(txt){
        console.log(txt + " 을 실행했구나");
        return hell();
})
    .then(function(message){
        console.log("여기는 " + message);
})