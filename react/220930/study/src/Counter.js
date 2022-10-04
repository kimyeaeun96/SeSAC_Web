import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);  // 파라미터에 기본값을 넣는다. 카운터의 기본값은 0. [상태값, 세터함수]
  return (
    <div>
      <h1>{number}</h1>

      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={() => setNumber(number + 1)}>+!</button>
    </div>
  );
};

export default Counter;
