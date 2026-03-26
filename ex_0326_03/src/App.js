import './App.css';
import { useState } from 'react';

function App() {

  let[fruits, setFruits] = useState([]);
  let[inputValue, setInputValue] = useState('');

  function addFruit(){
    if(inputValue.trim()){
      // 기존배열의 값에 새로운 값을 추가해 기존에 있던 값의 유실방지
      setFruits( [...fruits, inputValue] );
      setInputValue('');
    }
  }

  return (
    <div className="App">
      <h1>과일목록</h1>
      <input value={inputValue} placeholder='과일 등록하기' onChange={(e)=>{setInputValue(e.target.value)}} />
      <input type='button' value='확인' onClick={addFruit}/>
      <ul>
        {/* map 사용하기 
          * map안에 함수는 ()=>()로 사용
          * 배열.map((a)=>({a}))으로 배열 안의 값을 알아서 전부 가져옴 
          */}
        {
          fruits.map((f)=>(<li>{f}</li>))
        }
      </ul>

    </div>
  );
}

export default App;
