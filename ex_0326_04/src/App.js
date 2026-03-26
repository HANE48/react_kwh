import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [users, setUsers] = useState([]);

  let getFrom = (e) => {
    e.preventDefault();
    let name = e.target.myName.value;
    let age = e.target.myAge.value;
    setUsers([...users, { name: name, age: age }]);
    e.target.myName.value = '';
    e.target.myAge.value = '';
  }

  return (
    <div className="App">
      <h1>사용자 목록</h1>
      <form onSubmit={getFrom}>
        <input name='myName' placeholder='이름을 입력하세요' /><br />
        <input name='myAge' placeholder='나이를 입력하세요' />
        <input type='submit' value='확인' />
      </form>
      <hr/>
      <table border='1'>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
