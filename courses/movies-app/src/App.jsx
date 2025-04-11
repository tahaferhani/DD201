import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const getInputValue = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  const onSearchButtonClick = async (event) => {
    event.preventDefault();
    
    const resp = await axios.get(`https://api.themoviedb.org/3/search/tv?query=${search}&api_key=fef55a6754f2f6d00a0038388915039c`);
    setMovies(resp.data.results);
  }

  return (
    <div className="App">
      <form>
        <input value={search} onChange={getInputValue} type="text" placeholder="Search for a movie..." />
        <button onClick={onSearchButtonClick}>Search</button>
      </form>

      <div className="movies-list">
        {
          movies.map(movie => {
            return <div className="movie-item" key={movie.id}>
              <div className="img-container">
                <img src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} />
              </div>
              <h2>{movie.name}</h2>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
