import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// 과제 2
function App() {
  const [list, setList] = useState([]);
  const [fruit, setFruits] = useState('');
  const [price, setPrice] = useState('');

  const add = () => {
    if (fruit.trim() && price.trim()) {
      setList([...list, { fruit: fruit, price: price }]);
      setFruits('');
      setPrice('');
    }
  }

  const del = (index) => {
    let newList = list.filter((_, i) => { return i !== index });
    setList(newList);
  }

  const totalPrice = list.reduce((sum, item) => {
    return Number(sum) + Number(item.price);
  }, 0);

  return (
    <div className="App">
      <input placeholder='과일이름을 입력' value={fruit} onChange={(e) => { setFruits(e.target.value) }} /><br />
      <input placeholder='가격' value={price} onChange={(e) => { setPrice(e.target.value) }} />
      <input type='button' value='추가' onClick={add} />
      <hr />
      <Table list={list} del={(index)=>{del(index)}}/>
      <p>총 합계: {totalPrice}원</p>

    </div>
  );
}

function Table(props) {
  return (
    <table border='1'>
      <thead>
        <th>상품</th>
        <th>가격</th>
        <th>삭제</th>
      </thead>
      <tbody>
        {
          props.list.map((list, index) => (
            <tr>
              <td>{list.fruit}</td>
              <td>{list.price}</td>
              <td><input type='button' value='삭제' onClick={() => { props.del(index) }} /></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );

}//Table


export default App;
