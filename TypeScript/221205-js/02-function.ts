/*
 function 함수이름 ( 매개변수:타입 ) : 반환값타입 {
    반환값
 }
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
console.log( "sum2: ", sum2(3, NaN));

function sum3( a:number, b?:number ): number { // optional b 
    return a + b;
}
console.log( "sum3 : ", sum3(1, 2) );

const func1 = (a:string):void => {
    console.log(a);
}
func1("hi");

function func2() {
    console.log("func2")
}

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

// 인터페이스
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

interface Student {
    name: string,
    age: number,
    nickname?: string;
};
var stu1:Student = {
    name: '이름',
    age: 10
}
var stu2:Student = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
}

// 클래스로 인터페이스 확장시, 
//규칙은 모두 지키면서 + 추가 가능
interface Shape{
    width: number;
    getLength(): number;
}
class Square implements Shape { 
    width: number;
    height: number;
    getLength():number {
        return 0;
    }
}

// 클래스
/**
 * class 클래스이름 {
    변수명1: 타입;
    constructor(변수명:타입, 변수명:타입) {
        this.변수명1 = 변수명;
    }
}
 */
interface Developer {
    name: string;
    getName(): string;
}
class Developer1 implements Developer {
    readonly name: string;
    constructor(name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    
}

var dev1 = new Developer1("새싹");
//dev1.name = "sesac";
console.log(dev1.getName());

class Developer2 {
    constructor( readonly name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }   
}
var dev2 = new Developer2("코딩온");
console.log( dev2.getName());

// 제네릭 (Generics)
// 재사용성을 높이기 위해서 <>
// Array<number> : 넘버 타입의 배열을 만든다. = number[] 
// Array<>
// const [age, setAge] = useState<number>(0)
// any를 쓰면 되지 않나요? -> any는 타입 예측이 어려움. 함수에 제네릭을 선언하면 타입 예측이 가능해짐 

function getText<S>(text:S):S {
    return text;
}
getText<number>(1);
getText<string>('a');
getText(1); // 항상 타입을 지정하진 않아도 된다. 

var abc = 1;
console.log("typeof: ", typeof abc); // 기본타입 검사. 
console.log("INSTANCEOF: ", dev2 instanceof Developer2) // 클래스, 오브젝트 타입을 검사한다. 기본타입은 검사할수없다. 

// 타입검사
// primitive type => typeof
// object type => instanceof

if ( dev2 instanceof Developer2 ){

}