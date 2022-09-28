import React, { Component } from 'react';

// class Counter extends Component {
//     constructor(props) { // contructor: 컴포넌트의 생성자 메서드. 
//         super(props);    // 반드시 super(props) 호출해야 함
//                          // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다.
//         this.state = {   // -> constructor를 작성할 때는 super(props)를 작성해야 한다
//             number: 0,   // this.state = { 초깃값 }
//             fixedNumber: 0  
//         };  
//     }
// constructor 메서드 선언 없이 state만으로 초깃값 설정    
class Counter extends Component {
        state = {
            number: 0,
            fixedNumber: 0
        }

    render(){
        const { number, fixedNumber } = this.state; // 현재 state 조회
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                onClick={() => { // 화살표 문법 () => {} 이벤트로 설정할 함수를 넣는다.
                    // this.setState({ number: number + 1}); // this.setState({}): state 값 변경
                    // this.setState({ number: this.state.number + 1});  // this.setState 두번이어도 결과는 동일하다. state값이 바로 바뀌지는 않는다. 
                    // this.setState((prevState, props) => { // this.setState에 함수 인자 넣음. prevState 기존상태, props 현재 지니고 있는 props (만약 업데이트 과정에서 props가 필요없다면 생략가능)
                    //     return {
                    //         // 업데이트 하고 싶은 내용
                    //     }
                    // })
                    this.setState(prevState => {
                        return {
                            number: prevState.number + 1
                        };
                    });

                    // 위, 아래의 코드는 완전히 똑같은 기능을 함
                    // 아래 코드는 함수에서 바로 객체를 반환함

                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}
            >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;

// 화살표 함수에서 바로 객체 반환하기: {} 생략한다
// const sum = (a, b) => a + b;
// 
// this.setState(prevState => ({
//     number: prevState.number + 1
// }));