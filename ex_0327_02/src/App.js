import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='container'>
          {
            routes.map((route)=>(
              <Routes>
                {/* routes에 component는 text로 가져오므로 <>를 붙여 태그로 인식하게 한다 */}
                <Route path={route.path} element={<route.Component/>} />
              </Routes>
            ))
          }
        </div>
      </div>
    </Router>
  );
}

export default App;