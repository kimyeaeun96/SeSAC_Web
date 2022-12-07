import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  name: string;
  age: number;
}

function App(props:AppProps) {
  const [list, setList] = useState<number[]>([]); // []그냥 배열. number[] 숫자배열
  return (
    <div className="App">
      {props.name}
{props.age}
    </div>
  );
}

export default App;
