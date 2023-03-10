import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';

// styles
import './App.scss';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://www.omdbapi.com/?&apikey=7690a23c&s=kenshin')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error);
      });
  }, []);

  const search = (keyword) => {
    fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=7690a23c`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error);
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
        {loading && !message ? (
          <p className='loading'>Loading ...</p>
        ) : message ? (
          <p>{message}</p>
        ) : (
          <Movie movies={movies} />
        )}
      </div>
    </div>
  );
};

export default App;
