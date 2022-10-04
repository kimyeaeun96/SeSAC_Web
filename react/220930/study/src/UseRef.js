import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseRef = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const input = useRef(null); // UseCallback.js에서 추가된 부분: const input = useRef(null);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    input.current.focus(); // UseCallback.js에서 추가된 부분: input.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  //UseCallback.js에서 추가된 부분: <input ref={input} />
  return (
    <div>
      <input value={number} onChange={onChange} ref={input} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: {avg}</b>
      </div>
    </div>
  );
};

export default UseRef;
