import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[color, setColor] = useState('black');
  let change = <div className={color} id='box'><p>{color}</p></div>

  return (
    <div className="App">
      색상 선택 &nbsp;
      <select onChange={(e)=>{setColor(e.target.value)}}>
        <option value='black'>:: 색상선택 ::</option>
        <option value='red'>빨강</option>
        <option value='blue'>파랑</option>
        <option value='green'>초록</option>
        <option value='yellow'>노랑</option>
      </select>
      <hr/>
      {change}
    </div>
  );
}

export default App;
