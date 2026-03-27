import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from './Route/Register';
import { useState } from 'react';
import List from './Route/List';


function App() {
  const [list, setList] = useState([]);
  const [janr, setJanr] = useState('');
  const [title, setTitle] = useState('');
  const [release, setRelease] = useState('');
  const [platform, setPlatform] = useState('');

  let add = () => {
    if (janr.trim() && title.trim() && release.trim() && platform.trim()) {
      setList([...list, { janr: janr, title: title, release: release, platform: platform }])
      setJanr('');
      setTitle('');
      setRelease('');
      setPlatform('');
    }
  }

  let del = (index) => {
    setList(list.filter((_, i) => { return i != index }));
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className='nav'>
            <Link to='/register/' className='register'>등록</Link>
            <Link to='/list' className='list'>리스트</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/register' element={
            <Register list={list} setList={setList} janr={janr}
              setJanr={setJanr} title={title} setTitle={setTitle} release={release}
              setRelease={setRelease} platform={platform} setPlatform={setPlatform} add={add} />} />
          <Route path='/list' element={<List list={list} setList={setList} janr={janr}
            setJanr={setJanr} title={title} setTitle={setTitle} release={release}
            setRelease={setRelease} platform={platform} setPlatform={setPlatform} del={del} />} />
        </Routes>
        </div>
    </Router>
  );
}//app()

export default App;
