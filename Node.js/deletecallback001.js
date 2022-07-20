console.log("start")

function login(id, pw, cb){
    setTimeout(()=>{
        console.log("정보 없음")
        cb(id)
    }, 3000)
}

const user = login("yeye", "1234", user => {
    console.log(user + "는 배고프다.")
})

console.log("finish")
