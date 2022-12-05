// : 타입 표기 (Type Annotation )
let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string;
age = 10;
age = 'a';
let any: any;

// Array
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ['a','b','c','d'];
let arr3: Array<number> = [1,2,3,4,5];
// Tuple
let arr4: [string, number] = ['str', 1];
// Enum : 특정한 값의 집합을 만들고 선택한다
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

// void
// 함수: 반환갑시 없는 친구 / 변수 undefined와 null만 들어갈 수 있다.  / 함수에 쓸때는 반환값이 없다 라는 뜻
let void1: void = undefined;
function void2(): void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다.
// function neverEnd(): never{
//     while(true){
//         // 끝의 결과값이 never임. 반환을 하지 않는다. 
//         // 잘 쓰지 않는 never
//     }
// }

// any: 모든 타입 허용. 되도록 안 쓰는게 좋다. 타입스크립트를 쓰는 이유가 없음... 
let test: any;
test = 1;
test = [1,2,3];

// obejct: 기본타입을 제외한 모든 타입 가능. (array, tuple 등)
let test2: object;
test2 = [1,2,3];
