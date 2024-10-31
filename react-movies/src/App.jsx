import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = (page) => {
    const apiUrl = "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=" + search + "&page=" + page;
    setLoading(true);

    fetch(apiUrl)
    .then(resp => {
      return resp.json();
    })
    .then(resp => {
      console.log(resp);
      setMovies(resp.results);
      setPages(Array(resp.total_pages).fill().map((_, i) => i + 1));
      setLoading(false);
    })
  }

  const onButtonClick = (e) => {
    e.preventDefault();
    fetchData(activePage);
  }

  const onPageClick = page => {
    fetchData(page);
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className={`app ${loading ? 'loading' : ''}`}>
      <form>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button onClick={onButtonClick}>Search</button>
      </form>
    
      <div className="movies">
        {
          movies.map((movie, index) => {
            return <div className="movie" key={index}>
              <img className="poster" src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg"} />
              <h2 className="title">{movie.original_name}</h2>
            </div>
          })
        }
      </div>

      <div className="pagination">
        {
          pages.map(page => {
            return <span
              className={`page ${page == activePage ? 'active' : ''}`}
              key={page}
              onClick={() => onPageClick(page)}>
                {page}
              </span>
          })
        }
      </div>
    </div>
  )
}

export default App
