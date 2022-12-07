/*
 function 함수이름 ( 매개변수:타입 ) : 반환값타입 {
    반환값
 }
*/
var tetfunction = function () {
    return 'test';
};
console.log(tetfunction());
function sum1(a, b) {
    return a + b;
}
console.log("sum1 : ", sum1(1, 'a'));
console.log("sum1 : ", sum1(1, null));
function sum2(a, b) {
    return a + b;
}
console.log("sum2 : ", sum2(1, 2));
console.log("sum2: ", sum2(3, NaN));
function sum3(a, b) {
    return a + b;
}
console.log("sum3 : ", sum3(1, 2));
var func1 = function (a) {
    console.log(a);
};
func1("hi");
function func2() {
    console.log("func2");
}
var person = { name: "코딩온", age: 10 };
function getInfo(obj) {
    return obj;
}
console.log("getinfo : ", getInfo(person));
function getInfo2(obj) {
    return obj;
}
var person2 = { name: '코딩온', age: 10 };
person2.age = person2.age + 1;
//person2.name = "did";
console.log("getInfo2 :", getInfo2(person2));
;
var loginUser = function (id, pw) {
    return true;
};
console.log("loginUser : ", loginUser("id", "pwwww"));
var MyBook = /** @class */ (function () {
    function MyBook() {
        this.title = "책";
        this.date = '2022-01-01'; // 클래스 확장도 가능
    }
    MyBook.prototype.getInfo = function () {
        console.log("정보");
    };
    MyBook.prototype.changeTitle = function (newTitle) {
        this.title = newTitle;
        console.log(newTitle);
    };
    return MyBook;
}());
new MyBook().changeTitle("ㅁㄴㅁㄴㅁㄴㅇ");
;
var stu1 = {
    name: '이름',
    age: 10
};
var stu2 = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
};
var Square = /** @class */ (function () {
    function Square() {
    }
    Square.prototype.getLength = function () {
        return 0;
    };
    return Square;
}());
var Developer1 = /** @class */ (function () {
    function Developer1(name) {
        this.name = name;
    }
    Developer1.prototype.getName = function () {
        return this.name;
    };
    return Developer1;
}());
var dev1 = new Developer1("새싹");
//dev1.name = "sesac";
console.log(dev1.getName());
var Developer2 = /** @class */ (function () {
    function Developer2(name) {
        this.name = name;
        this.name = name;
    }
    Developer2.prototype.getName = function () {
        return this.name;
    };
    return Developer2;
}());
var dev2 = new Developer2("코딩온");
console.log(dev2.getName());
// 제네릭 (Generics)
// 재사용성을 높이기 위해서 <>
// Array<number> : 넘버 타입의 배열을 만든다. = number[] 
// Array<>
// const [age, setAge] = useState<number>(0)
// any를 쓰면 되지 않나요? -> any는 타입 예측이 어려움. 함수에 제네릭을 선언하면 타입 예측이 가능해짐 
function getText(text) {
    return text;
}
getText(1);
getText('a');
getText(1); // 항상 타입을 지정하진 않아도 된다. 
var abc = 1;
console.log("typeof: ", typeof abc); // 기본타입 검사. 
console.log("INSTANCEOF: ", dev2 instanceof Developer2); // 클래스, 오브젝트 타입을 검사한다. 기본타입은 검사할수없다. 
// 타입검사
// primitive type => typeof
// object type => instanceof
if (dev2 instanceof Developer2) {
}
