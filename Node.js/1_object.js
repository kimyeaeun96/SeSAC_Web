//객체 구조 분해
let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log("a");
    }
}; // dic

const { key1: key00, key2, key3, key4="a" } = obj;     // key1의 변수명을 key00 으로 바꾼다.
key3();
console.log(key00);

let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2;  // ...rest : 전개연산자. 나머지 객체를 가져오겠다.

console.log(rest);