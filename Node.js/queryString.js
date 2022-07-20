const url = require("url");
const querystring = require("querystring");
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";

const parsedUrl = url.parse(string);
const query = querystring.parse(parsedUrl.query);
console.log("querystring.parse(): ", query);
console.log("querystring.stringify(): ", querystring.stringify(query)); 