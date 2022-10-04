import React, { Component } from "react";

class Scroll extends Component {
  scrollBottom = () => {
    const { scrollHeight, clientHeight } = this.box; // 비구조화 할당 문법. const scrollHeight = this.box.scrollHeight
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "400px",
      width: "400px",
      overflow: "auto", // 스크롤 만드는거!!! 이밖에도 visible, hidden, scroll 속성 있음.
      position: "relative",
    };

    // 스크롤 박스
    const innerStyle = {
      width: "100%",
      height: "700px",
      background: "linear-gradient(white, purple)", // 백그라운드에 그라디언트 컬러 줄때
    };

    return (
      <div style={style} ref={(ref) => (this.box = ref)}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default Scroll;

// 자바스크립트로 스크롤바 내릴 때 DOM 노드가 가진 값들
// - scrollTop: 세로 스크롤바 위치(0~350)
// - scrollHeight: 스크롤이 있는 박스 안의 div 높이(650)
// - clientHeight: 스크롤이 있는 박스의 높이(300)
