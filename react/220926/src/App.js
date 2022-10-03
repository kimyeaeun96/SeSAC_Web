import React, { useState } from "react";
function App() {
  const [list, setList] = useState([
    "test",
    "testing",
    "apple",
    "sesac",
    "animal",
  ]);
  function filterCheck() {
    let lists = ["test", "testing", "apple", "sesac", "animal"];
    let newLists = [...lists, "dog"];

    //4글자 이상인 문자열을 찾을 떄
    // 예시 1(for 문으로 쓴다면)
    let newList = [];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].length > 4) newList.push(lists[i]);
    }
    //예시 1(filter 사용)
    newList = lists.filter((value) => {
      return value.length > 4;
      // 리턴 내 조건을 충복하는 요소만 result 리스트에 담김

      // a가 들어간 문자열 확인 하는 조건문
      // return value.includes('a');
    });
  }

  function addElement() {
    console.log([...list, "s"]);
    setList([...list, "s"]);

    let newList = [];
    for (let i = 0; i < list.length; i++) {
      console.log(i);
      console.log(list[i]);
      newList.push(i + list[i]);
    }
    newList = list.map((value, i) => {
      console.log(i);
      console.log(value);
      return i + value;
    });
    console.log(newList);
  }

  return (
    <div>
      {list}
      <ul>
        {list.map((name, i) => {
          return <li key={"li_" + i}> {name}</li>;
          // 인덱스. 값 형태로 출력
          // map() 함수를 이용해 컴포넌트를 생성할 때 "key" 사용 권장
          // key를 index 값으로 설정할 시, 리스트의 순서가 변경되면 모든 key가 변경되므로 key는 index가 아닌 고유값으로 설정해야 함.
        })}
      </ul>
      <ul>
        {list.filter((name) => {
          name.includes("a");
          return;
        })}
      </ul>
      <button onClick={addElement}>추가</button>
    </div>
  );
}

export default App;
