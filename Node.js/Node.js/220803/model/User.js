const fs = require("fs").promises;

exports.post_user = function(data){  //post_user 파일의 내용은 data 파라미터로 받는다.
    console.log( data );             //내용은 모두 data로 받는다. 
    const {id , name, pw, age} = data;
    fs.appendFile("./writeFolder/info.txt", id+"//"+name+"//"+pw+"//"+age+"\n");
};

exports.get_user = async function(){   // async - await 를 컨트롤러 파일에도 적용해준다. 그래야 펜딩 안걸림.
    var buffer = await fs.readFile("./writeFolder/info.txt")
    return buffer.toString();      // 데이터 원형을 문자로 바꾸자.
}

