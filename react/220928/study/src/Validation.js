import React, { Component } from "react";
import "./Validation.css";

class Validation extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    // onClick 이벤트가 발생할 때마다 input에 포커스를 줌. this.input이 컴포넌트 내부의 input 요소를 가리킨다.
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />

        <button onClick={this.handleButtonClick}>검증</button>
      </div>
    );
  }
}

export default Validation;
