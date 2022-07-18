const url = require("url");
/*
// 1
console.log(url);
console.log(url.parse);
console.log(url.URL);
const naver = new url.URL(string);


const { URL, parse } = url;
parse();
url.parse();
*/

// 2
const { URL } = url; 
const string = "https://sesac.seoul.kr/common/greeting.do?n_media=27758&n_query=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90&n_rank=1&n_ad_group=grp-a001-04-000000023843108&n_ad=nad-a001-04-000000178059628&n_keyword_id=nkw-a001-04-000004094617823&n_keyword=%EC%B2%AD%EB%85%84%EC%B7%A8%EC%97%85%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90&n_campaign_type=4&n_contract=tct-a001-04-000000000550537&n_ad_group_type=5"
const naver = new URL(string);

console.log(url.format(naver));
console.log(url.parse(string));

console.log(naver.searchParams);

