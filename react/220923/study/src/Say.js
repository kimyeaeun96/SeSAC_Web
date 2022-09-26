import React, {useState} from 'react'

// useState 함수 인자에 상태의 초깃값 설정. "" : 숫자, 문자열, 배열 등 값의 형태는 자유라는 뜻
// 함수를 호출 => 배열 반환. 배열의 첫번째 원소: 현재 상태. 두번째 원소: 상태를 바꿔주는 함수
// 세터(Setter) 함수. 배열 비구조화 할당을 통해 이름을 자유롭게 지을 수 있음.
const Say = () => {
    const [ message, setMessage ] = useState( "" );
    const onClickEnter = () => setMessage("안녕하세요!");
    const onClickLeave = () => setMessage("안녕히가세요!");

    const [color, setColor] = useState("black");

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>

            <button style={{color: 'red'}} onClick={() => setColor("red")}>
            빨간색
            </button>

            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>
            파란색
            </button>

            <button style={{color:'orange'}} onClick={() => setColor("orange")}> 
            주황색
            </button>
        </div>
    );
};

export default Say;

// //클래스형, 함수형 컴포넌트에서 state 값을 바꾸어야 할 때: setState, useState를 통해 전달받은 세터함수를 사용해야 함
// //아래는 잘못된 코드! setState, useStat를 사용해야함
// //클래스형 컴포넌트
// this.state.number = this.state.number + 1;
// this.state.array = this.array.push(2);
// this.state.object.value = 5;

// //함수형 컴포넌트
// const [object, setObject] = useState( {a:1, b:2} );
// object.b = 2;

// // props vs state
// // props: 부모 컴포넌트가 설정
// // state: 컴포넌트 자체적으로 지닌 값임. 컴포넌트 내부에서 값을 업데이트 가능함.