import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [visible, isVisible] = useState('none');
  let [name, setName] = useState('');
  let [ment, setMent] = useState('');


  let emotionSet = (e) => {
    let em = e.target.value;
    if (em === '행복') {
      setMent('행복해서 햄볶음');
    } else if (em === '슬픔') {
      setMent('우울해서 빵사먹음');
    } else {
      setMent('화나서 화통터짐');
    }
  }

  function nameCng(e) {
    // 화면이 넘어가는걸 막기위해 사용
    e.preventDefault();
    let name = e.target.myname.value;
    setName(name);
    isVisible('block');
  }

  return (
    <div className="App" >
      {/* submit버튼을 누르면 form의 모든정보를 nameCng에서 사용할 수 있음 */}
      <form method='get' action='/' onSubmit={nameCng} >
        <input placeholder='이름을 입력하세요' name='myname' />
        <input type='submit' value='인사하기' />
      </form>
      <h2 style={{ display: visible }}> 안녕하세요 {name}님  </h2>
      <MyMood visible={visible} emotionSet={emotionSet} />
      <h2 style={{ display: visible }}>{ment}</h2>
    </div>
  );
}//app

// 기분을 선택하는 컴포넌트
function MyMood(props) {
  return (
    <div>
      <select style={{ display: props.visible }} onChange={props.emotionSet}>
        <option value='' selected disabled>기분을 선택하세요</option>
        <option value='행복'>행복</option>
        <option value='슬픔'>슬픔</option>
        <option value='화남'>화남</option>
      </select>
    </div>
  );
}


export default App;
