async function call(name){
    console.log(name)
    return name
}

async function back(){
     console.log("back")
     return "back"
}

async function hell(){
    console.log("callback hell")
    return "여기는 callback hell"
}

async function exec(){
    let name = await call("kim")
    console.log(name + "입니다")
    let txt = await back("back")
    console.log(txt + "을 실행하셨군요.");
    let message = await hell()
    console.log(message)
}
exec();