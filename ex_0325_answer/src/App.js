import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [selColor, setSelColor] = useState('');
  let [m_font, setFont] = useState('');

  let changeBack = (e)=>{

    let color = e.target.value;
    setSelColor(color);

    if(color === '' || color === 'yellow'){
      setFont('black');
    }else{
      setFont('white');
    }
  }
  
  return (
    <div className="App">
      <select id='colorSelect' onChange={changeBack}>
        <option value=''>색상 선택</option>
        <option value='red'>빨강</option>
        <option value='blue'>파랑</option>
        <option value='green'>초록</option>
        <option value='yellow'>노랑</option>
      </select>
      <br/>
      {/* 이벤트로 바뀌는 부분만 태그에 적용 */}
      <div id='exam-div' style={{backgroundColor:selColor, color:m_font}}>
        {selColor}
      </div>
    </div>
  );
}



export default App;
