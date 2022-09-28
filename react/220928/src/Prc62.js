import React, { Component } from "react";

function Prc62() {
    return(
        <div className="prc62">
            실습 62. 자바스크립트 상속 실습
        </div>
    );
}

export default Prc62

class Student {
    constructor(name, school, age, number){
        this.name = name;
        this.school = school;
        this.age = age;
        this.number = number;
    }
    getAnswer(){
        return this.name + " " + this.school + " " + this.age+ " " + this.number;
    }
}

class Kim extends Student{
    constructor(a, b, c){
        super(a, b, c);
    }
    getAnswer(){
        return this.a + this.b + this.c
    }
}

class Lee extends Student{
    constructor(d, e, f){
        super(d, e, f)
    }
    getAnswer(){
        return this.d + this.e + this.f
    }
}

let Student1 = new Student('Jay', 'coolschool', 15, 2015110010);
console.log( Student1.getAnswer() );

let Student2 = new Student('Zen', 'perfectschool', 20, 20220405);
console.log( Student2.getAnswer() );