import React, {Component} from "react";

// class Event extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>리액트의 이벤트</h1>

//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="이곳에 입력해보세용"
//                     onChange={
//                         // e 객체: SyntheticEvent(합성 이벤트)
//                         (e) => {
//                             console.log(e); // e.target.value
//                         }
//                     } />
//             </div>
//         );
//     }
// }

// state 사용할 땐 constructor에서 state 초깃값 설정
// 1.
class EventClass1 extends Component {
    state = {
        username: "",
        message: ""
    }
    constructor(props) {    
        super(props);
        this.eventChange = this.eventChange.bind(this); 
        this.eventClick = this.eventClick.bind(this);
    }

    eventChange = (e) => {
        this.setState({
            username: e.target.value,
            message: e.target.value
        });
    }

    eventClick = () => {
        // alert(this.state.message);
        alert(this.state.username + ": " + this.state.message);
    }

    // Enter 했을 때 alert 뜨게함
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
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
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
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ""    // alert 뜨고 난 다음 setState를 이용해 msg 를 공백으로 만든다
                        })
                    }
                }>click</button>
            </div>
        );
    }
}

export default EventClass1;

// 리액트는 virtual dom 과 syntheticEvent를  사용함.
// 리액트에서 사용하는 onClick이나 onChange와 같은 이벤트들은 브라우저의 이벤트를 포함하고 있는 리액트의 고유 이벤트임. SyntheticEvent. 
// 브라우저의 기본 이벤트가 아님.

// (e) => {
//     console.log(e); // console창에 -> SyntheticBaseEvent { ~ }
//     console.log(e.target.value) // console창에 -> 인풋값 
// }