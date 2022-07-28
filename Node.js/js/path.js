const path = require("path");
const string = __filename; // 현재파일

console.log("path.delimiter: ", path.delimiter );             //구분 문자
console.log("path.dirname(string): ", path.dirname(string) ); //폴더 경로
console.log("path.extname(string): ", path.extname(string) ); //현재 파일의 확장자
console.log("path.basename(string): ", path.basename(string) ); // file name
console.log("path.parse(string): ", path.parse(string) ); // 해당 path 모듈의 객체 추출 