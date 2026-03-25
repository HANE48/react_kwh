import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let[sel, setSel] = useState('');

  // 애로우함수도 변수로 지정할 수 있음
  let menuChange = (e)=>{
        if(e.target.value !== ''){
          setSel(e.target.value + '을 선택함');
        }else{
          setSel('메뉴를 선택하세요')
        }}

  return (
    <div className="App">
      <h2>메뉴 선택</h2>

      <select onChange={menuChange}>
        <option value=''>메뉴</option>
        <option value='짜장'>짜장</option>
        <option value='짬뽕'>짬뽕</option>
      </select>
      <p style={{color:'blue'}}>{sel}</p>
    </div>
  );
}



export default App;
