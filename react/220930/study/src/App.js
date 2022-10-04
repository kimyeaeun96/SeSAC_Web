import React, { useState } from "react";
import Counter from "./Counter";
import UseEffect from "./UseEffect";
import UseReducer from "./UseReducer";
import Average from "./UseMemo";
import UseCallback from "./UseCallback";

function App() {
  return <UseCallback />;
}

export default App;
/*
useEffect.js에 대한 App 내용
function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>

      <hr />

      {visible && <UseEffect />}
    </div>
  );
}
*/
