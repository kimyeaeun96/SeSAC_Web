import React from "react";

const Map = () => {
  const fashion = ["청바지", "패딩", "반팔", "운동화"]; // 문자열 배열
  const fashionList = fashion.map((fashion, index) => (
    // map함수에 전달되는 콜백 함수의 인수인 index : 고유한 값이 없을 때만 key={index} <- 비효율적인 리렌더링
    <li key={index}>{fashion}</li>
  ));
  return <ul>{fashionList}</ul>;
};

export default Map;

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(num => num * num);
// console.log(result);

// arr.map(callback, [thisArg])

// map 함수의 파라미터는 다음과 같습니다.

// => callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지 입니다.
// 1) currentValue: 현재 처리하고 있는 요소
// 2) index: 현재 처리하고 있는 요소의 index값
// 3) array: 현재 처리하고 있는 원본 배열
// => thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스
