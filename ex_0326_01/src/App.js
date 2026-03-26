import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[n, setNum] = useState(0);
  let[odd, setOdd] = useState(0);

  let isOdd = (odd)=>{
    if(odd){
      return(<p>홀수입니다</p>);
    }else if(odd == 0){
      return(<p>0입니다</p>);
    }else{
      return(<p>짝수입니다</p>);
    }
  }//isOdd

  let change = (e)=>{
    let num = e.target.value;

    if(num === '-'){
      num = -1;
    }else if(num === '+'){
      num = 1;
    }else{
      setNum(0);
      return;
    }

    setNum(n+num);
  }//change

  return (
    <div className="App">
      <input type='button' value='-' onClick={change}/>
      <input type='button' value='0' onClick={change}/>
      <input type='button' value='+' onClick={change}/>
      <input size='5' onChange={(e)=>{setNum(Number(e.target.value))}} value={n}/>
      &nbsp;&nbsp;<span>{n}</span>
      <br/>
      <input type='button' value='확인' onClick={(e)=>{
        if(n%2==0){
          setOdd(false);
        }else if(n%2 != 0){
          setOdd(true);
        }else if(n==0){
          setOdd(0);
        }
      }}/>
      {isOdd(odd)}
    </div>
  );
}//app()

export default App;
