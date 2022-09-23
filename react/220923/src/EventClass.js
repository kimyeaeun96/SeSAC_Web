import React, {Component} from 'react';

class EventClass extends Component {
    constructor(props){
        super( props );

        this.printConsole = this.printConsole.bind(this); // 이때 this: 본인 class
    }
    printConsole(msg) {
        console.log('printConsole');
        console.log(msg);
        console.log(this);
    }
    printConsole2 = () => {
        console.log( "printConsole2" );
        console.log(this);
    }
    sendParameter = () => {
        this.printConsole('2')
    }
    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>printConsole</button><br />
                <button onClick={() => {
                    this.printConsole('2')
                }}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
            </div>
        )
    }
}

export default EventClass;

// bind, bind 아닌 방식
//printConsole('2')}
// 화살표 문법은 this 쓸 수 있다.

// 1. 함수를 기본 div에 걸 때 함수이름만 
// 2. 화살표 문법 this
// 3. 함수 안에서 this -> contructor 쓰거나 함수 자체를 변수로 사용해라