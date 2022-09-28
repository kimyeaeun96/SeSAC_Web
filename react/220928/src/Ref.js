import React, {Component, createRef} from "react";

class Ref extends Component {
    // 아이디에서 값을 불러오고 콘솔 
    event1(){
        let input = document.getElementById("input1");
        console.log( input.value );
    }
    // 화살표함수
    event2 = () => {
        console.log( this.input.value );
    }
    // createFRef -> input3 객체 생성
    input3 = React.createRef();
    event3 = () => {
        console.log(this.input3.current.value);
    }
    render(){
        return (<>
            <div>
                <input type="text" id="input1" />
                <button onClick={this.event1}>버튼</button>
            </div>
            <div>
                <input type="text" ref={(ref) => {this.input = ref}} />
                <button onClick={this.event2}>버튼2</button>
            </div>
            <div>
                <input type="text" ref={this.input3} />
                <button onClick={this.event3}>버튼3</button>
            </div>
        </>);
    }
}

export default Ref;