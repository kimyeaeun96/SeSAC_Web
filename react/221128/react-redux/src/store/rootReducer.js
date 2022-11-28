import { combineReducers } from "redux";
import PracticeReducer from "./PracticeReducer";
import AppReducer from "./AppReducer";

const rootReducer = combineReducers({
  PracticeReducer,
  AppReducer,
});

export default rootReducer;
