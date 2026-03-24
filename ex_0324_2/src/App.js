import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
  let [menu, setMenu] = useState('짜장');
  let content = <p>내용 없음</p>;

  if(menu == ''){
    content = <p>내용 없음</p>
  }else if(menu == '짜장'){
    content = <p>짜장을 선택</p>
  }else if(menu == '짬뽕'){
    content = <p>짬뽕을 선택</p>
  }

  return(
    <div>
      <h1>메뉴 선택</h1>
      <Select onChange={setMenu}/>
      {content}
    </div>
  );
}

function Select(props){
  return(
    <select onChange={(e)=>{props.onChange(e.target.value)}}>
        <option value=''>메뉴</option>
        <option value='짜장'>짜장</option>
        <option value='짬뽕'>짬뽕</option>
      </select>
  );
}

export default App;