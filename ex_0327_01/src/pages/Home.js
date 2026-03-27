import { Link, Routes, Route } from 'react-router-dom';
import '../App.css';

// 기본으로 만드는 함수이름은 파일이름이랑 똑같이 만들어야 한다
export default function Home() {
    return (
        <div>
            <h2>홈</h2>
            <p>기본경로 / 에 매칭되는 페이지</p>
            <nav className='nav'> 
                <Link to='/hello/React'>동적 URL 확인</Link>
            </nav>
            <Routes>
                <Route></Route>
            </Routes>
        </div>
    );
}