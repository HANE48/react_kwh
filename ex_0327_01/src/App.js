import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Hello from './pages/Hello';
import NotFound from './pages/NotFound';
import Navi from './pages/Navi';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='app-header'>
          <h1>리액트 Router 연습</h1>
          <nav className='nav'>
            {/* 클릭을 감지하는 컴포넌트 */}
            <Link to='/'>홈</Link>
            <Link to='/about'>소개</Link>
            <Link to='/hello/홍길동/20'>Hello 페이지</Link>
            <Link to='/test'>네비 테스트</Link>
          </nav>
        </header>
        <div className='app-main'>
          <Routes>
            {/* Link를 클릭했을때 어떤 컴포넌트를 보여줄지 결정하는 컴포넌트 */}
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/* /:name <- 파라미터로 전달하는 파라미터 이름 */}
            <Route path='/hello/:name/:age' element={<Hello/>}/>
            <Route path='/test' element={<Navi/>}/>
            {/* '*'는 위의 경로를 제외한 모든 경로를 말함 */}
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
