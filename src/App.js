import React, { useEffect, useState } from 'react';
import Header from './components/Header';

// styles
import './App.scss';

import Movie from './components/Movie';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) {
      setIsSuccess(true);

      // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7690a23c')
      fetch('http://www.omdbapi.com/?&apikey=7690a23c&s=batman')
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
        });
    }
  }, [isSuccess]);

  console.log(movies.Search ? movies.Search.length : null, 'data');

  return (
    <div className='app'>
      <Header />
      <div className='app-content'>
        <h2>Show your favorite movies</h2>
        <Movie />

        <div className='movies'>
          {movies.Search
            ? movies.Search.map((val, key) => {
                console.log(val, 'valllll');
                return (
                  <div className='card' key={key}>
                    <img src={val.Poster} alt='poster' />
                    <div className='poster-title'>
                      <p>{val.Title}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default App;
