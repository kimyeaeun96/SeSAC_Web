import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  // state와 dispatch 함수를 받아온다. 이때 state는 현재 가리키고 있는 상태, dispatch: 액션을 발생시키는 함수
  // dispatch(action)과 같은 형태. 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출되는 구조.
  // useReducer 첫번째 파라미터에 리듀서 함수, 두번째 파라미터에 해당 리듀서의 기본값
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>{state.value}</h1>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
    </div>
  );
};

export default UseReducer;
