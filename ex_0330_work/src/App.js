import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Select from './component/Select';
import routes from './routes';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <Select/>
        <Routes>
          {
            routes.map((route)=>(
              <Route path={route.path + '/:id'} element={<Movie/>}/>
            ))
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
