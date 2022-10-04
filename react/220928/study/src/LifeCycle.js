import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    number: 0,
    color: "purple",
  };

  myRef = null; // ref를 설정할 부분

  constructor(props) {
    super(props);
    console.log("constructor");
  }
//getDerivedStateFromProps
// props로 받아온 값을 state에 동기화시키는 용도. 컴포넌트가 마운트될 때, 업데이트 될 때 호출됨.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.color !== prevState.color) {
      // nextProps와 prevStatedml value를 비교하고, 같지 않다면, value값으로 nextProps의 value 동기화함.
      return { color: nextProps.color };
    }
    return null; // 서로 같다면 null
  }
//componentDidMount
// 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행됨.
// 이 안에서 다른 자스 라이브러리 또는 프레임워크의 함수를 호출하거나 이벤트 등록 등 비동기 작업을 처리함. 
  componentDidMount() {
    console.log("componentDidMount");
  }
//shouldComponentUpdate
//props 또는 state 변경했을 때 리렌더링을 시작할지 여부를 시정하는 메서드. 반드시 true 또는 false 반환해야함. 
//컴포넌트를 만들 때 이 메서드를 따로 생성하지 않으면 기본적으로 true 반환. 
//현재 프롭스, 스테이트는 this.props, this.state로 접근한다. 새로 설정된거는 nextProps, nextState로 접근함. 
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);

    return nextState.number % 10 !== 4;
    // 숫자의 마지막 자리가 4면 리렌더링하지 않음.
  }
//componentWillUnmount
//컴포넌트를 DOM에서 제거할 때 실행 
//이 메서드에서 등록한 이벤트나 타이머, 직접 생성한 dom이 있다면 여기서 제거작업함.
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
//getSnapshotBeforeUpdate
//render에서 만들어진 결과물이 브라우저에 실제 반영되기 직전에 호출됨. 
//이 메서드에서 반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot 값으로 전달받음. 
//주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용되는 메서드. ex) 스크롤바 위치를 유지할 때. 
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
//componentDidUpdate
//리렌더링을 완료한 후 실행됨. 
//prevProps나 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음.
//getSnapshotBeforeUpdate에서 반환한 값을 snapshot값으로 전달받음. 
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log("업데이트되기 직전 색상 : ", snapshot);
    }
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>

        <p>color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycle;
