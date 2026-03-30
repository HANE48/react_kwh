import logo from './logo.svg';
import './App.css';
import {dummy} from './movieDummy.js';
import Movie from './components/Movie.js';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        {
          dummy.results.map((item)=>(
            <Movie title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
