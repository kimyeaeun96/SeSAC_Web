import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Ref from './Ref';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Ref />
    <Ref /> 
  </React.StrictMode>
);
// 아이디가 중복되면 위에있는 걸로 가져온다.