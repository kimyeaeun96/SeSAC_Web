// : 타입 표기 (Type Annotation )
var str = 'hi';
var num = 1;
var flag = true;
var age; // union : 둘 중 하나의 타입만 지정 가능함
var any; // any  타입은 모든걸 허용한다. 
age = 10;
age = 'a';
age = true;
any = false;
any = [];
// Array
var arr1 = [1, 2, 3, 4, 5]; // 이 배열은 숫자만 받는다. 
//arr1.push('a'); // 안됨
var arr2 = ['a', 'b', 'c', 'd'];
var arr3 = [1, 2, 3, 4, 5];
// Tuple : 배열의 길이가 고정되어있다. 값을 넣거나 빼는 등 변경 불가. 
var arr4 = ['str', 1]; // [0] = string 타입, [1] = int type
// Enum : 값을 미리 지정한다. 특정한 값의 집합을 만들고 선택한다
var Names;
(function (Names) {
    Names[Names["\uD64D\uAE38\uB3D9"] = 0] = "\uD64D\uAE38\uB3D9";
    Names[Names["\uCF54\uB529\uC628"] = 1] = "\uCF54\uB529\uC628";
    Names[Names["\uC0C8\uC2F9"] = 2] = "\uC0C8\uC2F9";
})(Names || (Names = {}));
;
var name1 = Names.홍길동; // name1은 Names의 값에서만 선택 가능함
name1 = Names.코딩온;
// name1 = "새싹" ........."새싹" 과 Names.새싹 다름 
// void
// 함수: 반환갑시 없는 친구 / 변수 undefined와 null만 들어갈 수 있다.  / 함수에 쓸때는 반환값이 없다 라는 뜻
var void1 = undefined;
function void2() {
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
var test;
test = 1;
test = [1, 2, 3];
// obejct: 기본타입을 제외한 모든 타입 가능. (array, tuple 등)
var test2;
test2 = [1, 2, 3];
