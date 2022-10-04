import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 매번 업데이트할 때마다 렌더링
  //   useEffect(() => {
  //     console.log("렌더링 완료!");
  //     console.log({
  //       name,
  //       email,
  //     });
  //   });

  // 업데이트될 때 실행하기 싫다면 -> 함수의 두번째 파라미터롤 비어있는 배열을 넣는다.
  //   useEffect(() => {
  //     console.log("처음 렌더링될 때만 실행됨");
  //   }, []);

  // 특정 값이 업데이트 될 때만 렌더링할 때 -> 두번째 파라미터로 전달되는 배열에 검사하고 싶은 값을 넣는다.
  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  // 컴포넌트가 언마운트되기 전이나 업데이트 되기 전에 어떤 작업을 수행할 떄 -> 뒷정리함수(cleanup) 반환해야함
  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("clean up");
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={email} onChange={onChangeEmail} />
      </div>

      <div>
        <h2>이름: {name}</h2>
        <h2>이메일: {email}</h2>
      </div>
    </div>
  );
};

export default UseEffect;
