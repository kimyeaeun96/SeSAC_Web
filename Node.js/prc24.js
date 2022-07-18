const url = require('url');
const urlParams = new URLSearchParams('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac');
const keys = urlParams.keys();
const values = urlParams.values();

for(const key of keys){
    console.log(key);
}

for(const value of values) {
    console.log(value);
}



