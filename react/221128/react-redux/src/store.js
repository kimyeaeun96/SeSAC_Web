import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import rootReducer from "./store/rootReducer";

// const store = createStore(reducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

export default store;
