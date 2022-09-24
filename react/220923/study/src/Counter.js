import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) { // contructor: 컴포넌트의 생성자 메서드. 
        super(props);    // 반드시 super(props) 호출해야 함
                         // 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속하고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출한다.
        this.state = {   // -> constructor를 작성할 때는 super(props)를 작성해야 한다
            number: 0    // this.state = { 초깃값 }
        };  
    }

    render(){
        const { number } = this.state; // 현재 state 조회
        return (
            <div>
                <h1>{number}</h1>
                <button
                onClick={() => { // 화살표 문법 () => {} 이벤트로 설정할 함수를 넣는다.
                    this.setState({ number: number + 1}); // this.setState({}): state 값 변경
                }}
                >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;