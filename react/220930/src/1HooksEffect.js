import React, { useEffect, useState } from "react";

const Hook = () => {
    const [name, setName] = useState("");
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName( e.target.value )
    }

    const changeCnt = () => {
        setCnt( cnt + 1 )
    }

    // //특정 조건이 변경될 때만 업데이트 하고 싶을 때
    useEffect(() => {
        console.log("useEffect");
        console.log("name : ", name);
    }, [cnt]); // 특정 조건이 변경돨 때만 업데이트 하고 싶다 -> 두번째 인자에 [] 으로 지정한다. 빈배열이면 어떤 것이든 다 실행됨. 
    
    // componentDidUpdate(prevProps, prevState){
    //     if ( prevState.name != this.state.name ){
    //         // 실행
    //     }
    // } 

    // // 뒷정리 함수: return 먼저 실행 -> 나머지 : 업데이트 되기 직전의 것을 먼저 실행 / 직전 값 먼저, 직후값 이후. 
    // useEffect(() => {
    //     console.log( "name1: ", name );
    //     return() => {
    //         console.log("name2: ", name);
    //     }
    // }, [name]);
    return(
        <div class="1HookEffect"> 
            <div>
                <input
                value={name}
                onChange={changeName}
                />
                <button 
                onClick={changeCnt}>+1</button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    )
}
// 최상위 태그에 클래스 컴포넌트를 건다. 
// .1HookEffect .box {

// }
export default Hook;

