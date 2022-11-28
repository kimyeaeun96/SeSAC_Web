import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

function reducer(state, action) {
  if (action.type === "ADD") {
    return { num: state.num + parseInt(action.num) };
  } else if (action.type === "SUBTRACT") {
    return { num: state.num - parseInt(action.num) };
  }
  return { num: 0 };
}

const store = createStore(reducer);

function PracticeDefault() {
  const num = useSelector((state) => state.num);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {num}원</h3>
      <Button />
    </div>
  );
}

const Button = () => {
  const dispatch = useDispatch();

  function increase() {
    const num = document.getElementById("num").value;
    parseInt(num);
    dispatch({ type: "ADD", num: num });
  }

  function decrease() {
    const num = document.getElementById("num").value;
    dispatch({ type: "SUBTRACT", num: num });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input type="text" id="num" />
      <button onClick={increase}>입금</button>
      <button onClick={decrease}>출금</button>
    </div>
  );
};

export default PracticeDefault;
