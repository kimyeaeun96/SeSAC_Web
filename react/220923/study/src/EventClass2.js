import React, {Component} from "react";
    // 2. onChange, onClick에 전달할 함수를 미리 빼서 컴포넌트 임의메서드로 만드는 방법
    // bind: this가 현재 컴포넌트, 즉 컴포넌트 자신을 가리키기 위해 사용함.
    // 함수 호출 시 this는 호출부에 따라 결정됨. 
    // 임의 메서드가 특정 html 요소의 이벤트로 등록되면서 메서드와 this의 관계가 끊어지는 문제가 발생.
    // 따라서 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신을 가리키게 하기 위해서 메서드를 this와 바인딩하는 작업이 필요함.
    // 만약 바인딩 안 하면-> this는 undefined 가리킴. 
    // constructor 생산자 메서드. 
    // constructor(props) {    
    //     super(props);
    //     this.eventChange = this.eventChange.bind(this); 
    //     this.eventClick = this.eventClick.bind(this);
    // }

    // 그런데 새로 함수 만들 때마다 매번 bind 하기가 너무 귀찮아. 이때 화살표 함수 형태로 메서드 정의하면 쉬움! 
    // 기존에 있던 형식에 화살표만 추가함.
    // input 여러 개 일 때, event 객체 사용해서 이벤트 다룸. e.target.intput의 name


class EventClass2 extends Component {
    state = {
        username: "",
        message: ""
    }

    eventChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    eventKeyPress = (e) => {
        if( e.key === "Enter" ) {
            this.eventClick();
        }
    }

    render() {
        return (
            <div>
                <h1>리액트의 이벤트</h1>

                <input 
                    type="text"
                    name="username"
                    placeholder="사용자이름"
                    value = {this.state.username}
                    onChange={
                        this.eventChange
                    }
                />

                <input 
                    type="text"
                    name="message"
                    placeholder="입력하세용"
                    value = {this.state.message}
                    onChange={ this.eventChange}
                    onKeyPress={this.eventKeyPress}
                />

                <button onClick={
                    this.eventClick
                }>click</button>
            </div>
        );
    }
}

export default EventClass2;

// 리액트는 virtual dom 과 syntheticEvent를  사용함.
// 리액트에서 사용하는 onClick이나 onChange와 같은 이벤트들은 브라우저의 이벤트를 포함하고 있는 리액트의 고유 이벤트임. SyntheticEvent. 
// 브라우저의 기본 이벤트가 아님.

// (e) => {
//     console.log(e); // console창에 -> SyntheticBaseEvent { ~ }
//     console.log(e.target.value) // console창에 -> 인풋값 
// }