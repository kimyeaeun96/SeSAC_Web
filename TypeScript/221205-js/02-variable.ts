// : 타입 표기 (Type Annotation )
let str: string = 'hi';
let num: number = 1;
let flag: boolean = true;
let age: number | string | boolean; // union : 둘 중 하나의 타입만 지정 가능함
let any: any; // any  타입은 모든걸 허용한다. 
age = 10;
age = 'a';
age = true;
any = false;
any = [];


// Array
let arr1: number[] = [1,2,3,4,5]; // 이 배열은 숫자만 받는다. 
//arr1.push('a'); // 안됨
let arr2: string[] = ['a','b','c','d'];
let arr3: Array<number> = [1,2,3,4,5];
// Tuple : 배열의 길이가 고정되어있다. 값을 넣거나 빼는 등 변경 불가. 
let arr4: [string, number] = ['str', 1]; // [0] = string 타입, [1] = int type
// Enum : 값을 미리 지정한다. 특정한 값의 집합을 만들고 선택한다
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동; // name1은 Names의 값에서만 선택 가능함
name1 = Names.코딩온;
// name1 = "새싹" ........."새싹" 과 Names.새싹 다름 

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

// any: 모든 타입 허용. 되도록 안 쓰는게 좋다. 자스에 타입 지정하는 목적인 타입스크립트를 쓰는 이유가 없음... 
let test: any;
test = 1;
test = [1,2,3];

// obejct: 기본타입을 제외한 모든 타입 가능. (array, tuple 등)
let test2: object;
test2 = [1,2,3];
