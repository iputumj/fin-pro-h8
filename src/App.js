import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

// styles
import './App.scss';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?&apikey=7690a23c&s=kenshin')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const search = (keyword) => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=7690a23c`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  };

  return (
    <div className='app'>
      <Header title='FinProH8' />
      <div className='app-content'>
        <div className='app-search'>
          <h2>Show your favorite movies</h2>
          <Search search={search} />
        </div>
        <Movie movies={movies} />
      </div>
      d
    </div>
  );
};

export default App;
