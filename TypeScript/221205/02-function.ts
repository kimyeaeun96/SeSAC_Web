/*
 function 함수이름 ( 변수명:타입 ) : 반환타입 {}
*/

const tetfunction = () => {
    return 'test';
}
console.log( tetfunction() );

function sum1(a,b) {
    return a + b;
}
console.log( "sum1 : ", sum1(1,'a') );
console.log( "sum1 : ", sum1(1, null) );

function sum2( a:number, b:number ):number {
    return a + b;
}
console.log( "sum2 : ", sum2(1, 2) );

function sum3( a:number, b?:number ) {
    return a + b;
}
console.log( "sum3 : ", sum3(1, 2) );

const func1 = (a:string):void => {
    console.log(a);
}
func1("hi");

let person = { name: "코딩온", age: 10};
function getInfo(obj: {name:string, age:number}){
    return obj;
}
console.log("getinfo : ", getInfo(person));

interface PersonData {
    readonly name: string;
    age: number;
    nickname?: string;
}

function getInfo2(obj: PersonData){
    return obj;
}
let person2:PersonData = {name: '코딩온', age:10};
person2.age = person2.age + 1;
//person2.name = "did";

console.log("getInfo2 :", getInfo2(person2));

interface login {
    (id: string, pw:string):boolean
};
let loginUser:login = (id, pw) => {
    return true
}

console.log("loginUser : ", loginUser("id", "pwwww"));

interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string): void;
}

class MyBook implements Book {
    title = "책";
    date = '2022-01-01'; // 클래스 확장도 가능
    getInfo(){
        console.log("정보")
    }
    changeTitle(newTitle: string): void {
        this.title = newTitle
        console.log(newTitle)
    }
}
new MyBook().changeTitle("ㅁㄴㅁㄴㅁㄴㅇ");