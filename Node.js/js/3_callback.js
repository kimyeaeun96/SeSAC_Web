/*
function func1(callback){
    callback();
}
function func2(){
    console.log(" 안녕 ");
}
func1(func2)
*/

function func1(callback){
    callback();
}
func1(function (){
    console.log(" 안녕 ");
});
//일반적으로 콜백함수에 이름 안넣는다. 두번째 방법으로 주로 한다.