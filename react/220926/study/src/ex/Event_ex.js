import React, { useState } from "react";

const Event_ex = () => {
  const [data, setData] = useState([
    { id: 1, user: "코디", email: "codi@gmail.com" },
    { id: 2, user: "윤소희", email: "yoonsohee@gmail.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  const onClick = () => {
    const nextData = data.concat({
      id: nextId,
      user: inputUser,
      email: inputEmail,
    });
    setNextId(nextId + 1);
    setData(nextData);
    setInputUser("");
    setInputEmail("");
  };

  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemove(data.id)}>
      {data.user}:{data.email}
    </h2>
  ));

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      return onClick();
    }
  };

  const onRemove = (id) => {
    const nextData = data.filter((data) => data.id !== id);
    setData(nextData);
  };
  return (
    <div>
      <input
        name="user"
        value={inputUser}
        onChange={onChangeUser}
        placeholder="이름"
      />
      <input
        name="email"
        value={inputEmail}
        onChange={onChangeEmail}
        placeholder="이메일"
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>등록</button>
      <div>{dataList}</div>
    </div>
  );
};

export default Event_ex;
