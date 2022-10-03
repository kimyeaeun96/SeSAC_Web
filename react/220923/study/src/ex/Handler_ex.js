import React, { Component } from "react";

class Handler_ex extends Component {
  state = {
    text: "Hello World",
  };
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    // const { text } = this.state;
    this.setState({ text: "Hello World" ? "Goobye world" : "Hello World" });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
