import "./App.css";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import PracticeDefault from "./PracticeDefault";

// const store = createStore(reducer);

function App() {
  return (
    <div id="app">
      {/* provider 안에서 store 관리하겠다 */}
      <Provider store={store}>
        <h1>number : {}</h1>
        <Box1 />
        <PracticeDefault />
      </Provider>
    </div>
  );
}

const Box1 = () => {
  const number = useSelector((state) => state.number); // 일반 js에서의 getState 역할: store state에 접근한다
  console.log("Box1");
  return (
    <div>
      <h2>Box1 컴포넌트 number : {number} </h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  console.log("Box2");
  return (
    <div>
      <h3>Box2 컴포넌트 number : </h3>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  console.log("Box3");
  // dispatch(): state 변경 값인 action 객체를 dispatch로 보낸다 -> dispatch: 값을 변경하는 함수. -> reducer로 보낸다
  const number = useSelector((state) => state.number); // state 안에 state.number를 보겠다
  const dispatch = useDispatch();
  return (
    <div>
      <h4>Box3 컴포넌트 number : {number} </h4>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "INCREASE" });
        }}
      />
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: "DECREASE" });
        }}
      />
    </div>
  );
};

export default App;
