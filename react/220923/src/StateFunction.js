import React, {useState} from "react";

// MSG : name, list 같은...
function StateFunction () {
    const [msg, setMsg] = useState(""); // 초기값
    const [list, setList] = useState([]);
    // this.state {
        // msg: ""
    // }

    function changeMsg(){
        setMsg("메세지")
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button> 
        </div>
    )
}
export default StateFunction;

// onclick={함수이름}
// 함수형에서 useState는 각각 불러온다. setState와 다른점. 