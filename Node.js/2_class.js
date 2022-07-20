/*
class Cat {     
    constructor( name ){
        this.name = name;
    }
    mew(){
        console.log(this.name + " 야옹");
    }
}

var cat1 = new Cat("나비"); // cat1 객체를 만든다. 
var cat2 = new Cat("냥이");
console.log(cat1);
cat1.mew();
cat2.mew();


class School {
    constructor( space ){
        this.space = space;
    }
    _school(){
        console.log(this.space + " 는 재밌어");
    }
}

var school1 = new School("중학교");
var school2 = new School("고등학교");
console.log(school1);
school1._school();
school2._school();
*/

class Car {
    constructor( color ){
        this.color = color;
        this.isWheel = true; 
        this.isDoor = true;
    }
    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
} // 자동차공장 바퀴가 있고 문이 있고 전진, 후진만 한다.

var car0 = new Car("red");
var car1 = new Car("red");
var car2 = new Car("red");
var car3 = new Car("red");
var car4 = new Car("red");
var car5 = new Car("red");
