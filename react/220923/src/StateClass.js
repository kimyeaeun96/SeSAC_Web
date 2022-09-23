import React, { Component } from "react";

class StateClass extends Component {
    // constructor(props) {
    //     super(props); // super 부모의 함수 쓰고 싶을때 super.~

    //     this.state = {
    //         // state.~ 형태로 저장
    //         name: "SeSAC",
    //         list: ['s', 'e', 's', 'a', 'c']
    //     };
    // }

    state = {
        name: 'SeSAC',
        cnt: 0,
        list: ['s', 'e', 's', 'a', 'c']
    };

    render(){
        return(
            <div>
                <div>{this.state.name} StateClass {this.state.cnt}</div>
                <button onClick={()=>{
                    //  this.setState({name: "청년취업사관학교", cnt: this.state.cnt + 1});
                    //  this.setState({name: "영등포 캠퍼스", cnt: this.state.cnt + 1});
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                }}>클릭</button>
                <button onClick={()=>{ this.setState({list: ['c', 'l', 'i']})}}>클릭2</button>
                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default StateClass;

// constructor 구조체
// 클래스 실행할 때 가장 먼저 실행된다. 
//  props 안의 내용을 바로 받는다.

// var car1 = new Car();
// car1.getName();
// car1.name;
// class Car{
//     constructor(){
//         this.name = "자동차";
//     }
// }

// extends 상속. 부모의 것을 가져온다.
// constructor : 자식 x 부모 ㅇ -> 부모의 것을 가져오고, 반대면 부모의 것을 자식의 것으로 덮어쓴다. 

// setState({name:"청년취업사관학교"}) setState: state 안에 name을 비꿔라

// jsx에서 반복문을 돌릴때 map()
// setState : 한개씩 각각 변경하지 않고 한번에 두개, 세개 여러개 변경 가능. 
// 비동기 처리가 아니라서 위에걸 먼저 처리하지 않는다. 기다리지 않는다. 순차적으로 진행하지 않음. 