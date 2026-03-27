import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  //add items
  const addItem = () => {
    let patt = /^[0-9]*$/;
    // 입력값이 정수가 아닌경우
    if (!patt.test(price)) {
      alert('가격은 정수로');
      return;
    }

    if (name.trim() && price.trim()) {
      setItems([...items, { name: name, price: Number(price) }]);
      setName('');
      setPrice('');
    }

  };

  //delete items
  const deleteItem = (index) => {
    let newList = items.filter((_, i) => i != index);
    setItems(newList);
  };

  const totalPrice = items.reduce((sum, item) => {
    return sum + item.price;
  }, 0)

  return (
    <div>
      <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder='상품명' /><br />
      <input value={price} onChange={(e) => { setPrice(e.target.value) }} placeholder='가격' />
      {/* <input type='button' value='추가' onClick={addItem} /> */}
      <button onClick={addItem}>추가</button>
      <hr />
      <table border='1'>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>비고</th>
        </tr>
        {
          items.map((list, index) => (
            <tr>
              <td>{list.name}</td>
              <td>{list.price}</td>
              <td><button onClick={() => { deleteItem(index); }}>삭제</button></td>
            </tr>
          ))
        }
      </table>
      <p>총 가격: {totalPrice}원</p>
    </div>
  );
}

export default App;
