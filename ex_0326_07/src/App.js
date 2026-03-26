import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [janr, setJanr] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [platform, setPlatform] = useState('');

  function add() {
    setList([...list, { janr: janr, title: title, release: release, platform: platform }]);
    setJanr('');
    setTitle('');
    setRelease('');
    setPlatform('');
  }

  function del(index) {
    let newList = list.filter((_, i) => { return i != index });
    setList(newList);
  }

  return (
    <div className="App">
      장르 &nbsp;&nbsp;&nbsp;<Select setJanr={(e)=>(setJanr(e))}/><br/>
      제목 &nbsp;&nbsp;&nbsp;<input value={title} placeholder='제목입력' onChange={(e) => { setTitle(e.target.value) }} /><br />
      출시일 <input type='date' value={release} placeholder='출시일입력' onChange={(e) => { setRelease(e.target.value) }} /><br />
      플랫폼 <input value={platform} placeholder='플랫폼입력' onChange={(e) => { setPlatform(e.target.value) }} /> &nbsp;
      <input type='button' value='등록' onClick={add} />
      <hr />
      <Table list={list} del={(index) => { del(index) }} />
    </div>
  );
}

function Select(props) {
  return (
    <select onChange={(e) => { props.setJanr(e.target.value) }}>
      <option disabled selected>장르선택</option>
      <option value='액션'>액션</option>
      <option value='RPG'>RPG</option>
      <option value='슈팅'>슈팅</option>
      <option value='음악'>음악</option>
      <option value='공포'>공포</option>
      <option value='스포츠'>스포츠</option>
    </select>
    );
}


function Table(props) {
  return (
    <table border='1'>
      <thead>
        <th>장르</th>
        <th>제목</th>
        <th>출시일</th>
        <th>플랫폼</th>
        <th>비고</th>
      </thead>
      <tbody>
        {
          props.list.map((list, index) => (
            <tr>
              <td>{list.janr}</td>
              <td>{list.title}</td>
              <td>{list.release}</td>
              <td>{list.platform}</td>
              <td><input type='button' value='삭제' onClick={() => { props.del(index) }} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}


export default App;
