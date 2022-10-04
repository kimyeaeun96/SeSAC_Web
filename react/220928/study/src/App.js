import React, { Component } from "react";
import Validation from "./Validation";
import Refsample from "./Refsample";
import Scroll from "./Scroll";
import ScrollBox from "./ScrollBox";
import LifeCycle from "./LifeCycle";

function getRandomColor() {
  // 16777215를 16진법으로 하면 ffffff가 됨. 해당 코드는 000000~ffffff 값을 반환함. 
  return "#" + Math.floor(Math.random() * 16777215).toString(16); 
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycle color={this.state.color} />
      </div>
    );
  }
}
export default App;
