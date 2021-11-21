import React, { useEffect, useState } from 'react'
import Search from '../Search';
import Movies from '../Movies';

const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movieData, setMovieData] = useState('');

  const searchMovie = (searchName) => {
    setSearchValue(searchName);
  }


  useEffect(() => {
    async function fetchSearchMovies(searchMovie) {
      const response = await fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchMovie}&language=en-US`);
      // waits until the request completes...
      let data = await response.json();
      let dataResults = data.results;

      setMovieData(dataResults);
    }
      searchValue !== '' && fetchSearchMovies(searchValue)
  }, [searchValue])


  return (
    <div className="home container">
        <h1>The Movie Search App</h1>
        <Search searchMovie={searchMovie} />
        {movieData && <Movies movieData={movieData}/>}
    </div>
  )
}

export default Home
