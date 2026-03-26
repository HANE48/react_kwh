import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // {할일: 할일, 마감일: date, 작업: 삭제버튼}
  let[list, setList] = useState([]);
  let[task, setTask] = useState('');
  let[date, setDate] = useState('');

  let add = ()=>{
    // 값이 없으면 false이고 있으면 true로 반환되는듯??
    if(task.trim() && date.trim()){
      setList([...list, {task:task, date:date}]);
      setTask('');
      setDate('');
    }
  }

  let del = (index)=>{
    // filter는 res, i를 필수로 주어야하는데 필요없으면 '_'로 처리가능함
    let newList = list.filter(( _, i)=>{ return i !== index });
    setList(newList);
  }//del

  return (
    <div className="App">
      <div>
        <input id='to-do' placeholder='할 일을 입력하세요' 
        value={task} onChange={(e)=>{setTask(e.target.value)}}  /><br/>
        
        <input type='text' id='end-date' placeholder='마감일 (예: 2026-03-27)' 
        value={date} onChange={(e)=>{setDate(e.target.value)}} />

        <input type='button' value='추가' onClick={add}/>
      </div>
      <hr/>
      {/* 숙제 1. 테이블전체를 컴포넌트로 분리하기 
        * 숙제 2. 사진 보고 똑같이 만들기 
        * 숙제 3. 장르, 제목, 출시일, 플랫폼을 받아 테이블로 만들기 비고칸 만들어 삭제버튼까지 만들기
        */}

      <Table list={list} del={(index)=>{del(index)}} />
    </div>
  );
}//app

function Table(props){
  return(
    <table border='1'>
        <thead>
          <tr>
            <th>순번</th>
            <th>할 일</th>
            <th>마감일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {
            props.list.map((list, index)=>(
              <tr>
                <th>{index+1}</th>
                <td>{list.task}</td>
                <td>{list.date}</td>
                <td><input type='button' value='삭제' onClick={()=>{props.del(index)}}/></td>
              </tr>
            ))
          }
        </tbody>
      </table>
  );
  
}


export default App;
