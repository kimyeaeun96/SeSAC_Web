// createRef() 사용하여 ref 만들기

import React, { Component } from "react";

class Refsample extends Component {
  // 1. 변수에 React.createRef()를 담는다.
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus(); // 3. ref 설정해준 Dom에 접근하려면 this.input.current로 조회함.
  };
  // 2. 해당 볌수를 ref 달고자 하는 요소에 ref prop 넣어주면 ref 설정 완료.
  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default Refsample;
