import {useReducer} from 'react';

// 외부에서 상태관리 가능함. 
function reducer(state, action){
    // action 검사
    switch ( action.type){
        case "INCREMENT":
            return {value: state.value + 1};
        case "DECREMENT":
            return {value: state.value - 1};
        default:
            return state;
    }
}
const Reducer = () => {
    // dispatch: 새로운 액션값 반환 
    const [state, dispatch] = useReducer(reducer, {value: 0}); // 함수, 기본값(state) 초기값 설정
    return (
        <div>
            <h1>{state.value}</h1>
            <button onClick={() => {dispatch({type: "DECREMENT"})}}>-1</button> 
            <button onClick={() => {dispatch({type:"INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;

//useReducer는 useState를 대체함. 
//useState는 함수 내에서만 동작하는 반면 useReducer는 함수 밖에서 관리 가능. 따로 파일을 뺄 수도 잇음.
