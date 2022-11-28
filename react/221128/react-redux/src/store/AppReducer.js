function AppReducer(state, action) {
  if (action.type === "ADD") {
    return { abc: state.num + parseInt(action.num) };
  } else if (action.type === "SUBTRACT") {
    return { num: state.num - parseInt(action.num) };
  }
  return { num: 0 };
}

export default AppReducer;
