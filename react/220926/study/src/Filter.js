import React, { useState } from "react";

const Filter = () => {
  const [names, setNames] = useState([
    { id: 1, text: "청바지" },
    { id: 2, text: "패딩" },
    { id: 3, text: "반팔" },
    { id: 4, text: "운동화" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  // onDoubleClick: html을 더블클릭할 때 사용하는 이벤트
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default Filter;

// const numbers = [1, 2, 3, 4, 5, 6];
// const biggerThanThree = numbers.filter((number) => number > 3);
// const withoutThree = numbers.filter((number) => number !== 3);
