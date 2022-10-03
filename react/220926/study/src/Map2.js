import React, { useState } from "react";

const Map2 = () => {
  const [names, setNames] = useState([
    // 객체형태의 배열
    { id: 1, text: "청바지" },
    { id: 2, text: "패딩" },
    { id: 3, text: "반팔" },
    { id: 4, text: "운동화" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // concat(): 기존 배열에 새로운 항목을 배열로 추가하는 함수
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>); // key={name.id}
  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  );
};

export default Map2;
