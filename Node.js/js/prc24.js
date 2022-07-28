/*
const url = require("url");
const querystring = require("querystring");
const string = url("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac")
const parsedUrl = url.parse(string);
const query = querystring.parse(parseUrl.query);
console.log("quertstring.parse() : ", query);
console.log("querystring.stringify()  : ", querystring.stringify(query));
*/


const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";
const naver = new URL(string);
console.log( url.format( naver ) );
console.log( url.parse(string));
console.log( naver.searchParams );
console.log(naver.searchParams.keys());
console.log(naver.searchParams.values());

naver.searchParams.delete("sm");
console.log(naver.searchParams.keys());