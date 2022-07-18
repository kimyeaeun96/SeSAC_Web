const obj = {
    out : {
        in : {
            key: 'value'
        }
    }
};

console.log(obj);
console.log(obj["out"]);
console.log(obj["out"]["in"]);
console.time("시간"); // time - timeEnd 사이의 걸린 시간. 

console.error("에러"); // error 출력

console.trace("Error"); // 에러 추적

console.table([{name:'abc', birth:1990}, {name:'def', birth:1980}])
//[0], [1] 값을 넣는다.

console.dir(obj, {colors: true, depth: 2}); // obj의 딕셔너리를 보여준다.
console.dir(obj, {colors: false, depth: 1}); // 

console.timeEnd("시간"); 