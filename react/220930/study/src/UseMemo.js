import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산");

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // ~.reduce(누적값, 현재값, 인덱스, 요소) 현재 누적값(0) a + 추가되는 값 b
  return sum / numbers.length;
};

//인풋 값이 수정될 때에도 불필요하게 getAverage가 호출됨. -> useMemo() 작업 최소화
//const Average = () => {
//  const [list, setList] = useState([]);
//  const [number, setNumber] = useState("");

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);

  // onChange, onInsert -> 컴포넌트가 리렌더링될 때마다 매번 함수가 새로 생성된다.
  // 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 이부분을 최적화해주는 것이 좋음. -> useCallback
  return (
    <div>
      <input value={number} onChange={onChange} />
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

export default Average;
