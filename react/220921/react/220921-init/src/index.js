import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDom.createRoot: 가장 바깥쪽의 요소를 만들겠다. 
// root -> index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
// StrictMode 버그 검사 도구 ( 자식컴포넌트에 대한 검사, 경고문을 띄운다 )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();  // <- 리액트 애플리케이션의 성능 측정 
