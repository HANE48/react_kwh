import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[level, setLevel] = useState('');
  // JSON 식으로 표기 키 : 밸류의 해시값 느낌????
  let exInfo = { 
    light:{ title:'산책', des:'가볍게 몸을 풀어보세요'},
    medium: {title: '조깅', des:'적당한 운동으로 컨디션을 유지'},
    hard: {title: '헬스', des:'강한 운동으로 체력을 키워요'}
  }

  let selected = exInfo[level];

  return (
    <div style={{ padding: '20px'}}>
      <h2>오늘의 운동 강도</h2>
      <div style={{marginBottom:'20px'}}>
        <input type='button' value='가벼운 운동' onClick={()=>{setLevel('light')}}/>
        <input type='button' value='중간 강도 운동' onClick={()=>{setLevel('medium')}} style={{margin:'0 10px'}}/>
        <input type='button' value='고강도 운동' onClick={()=>{setLevel('hard')}}/>
      </div>
      {/* selected 변수에 값이 있을땐, div를 생성 
        * && () 로 값이 있으면 ()안에 내용을 추가하고 없으면 실행 안함
        */}
      { selected && (
        <div>
          <h3>{selected.title}</h3>
          <h3>{selected.des}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
