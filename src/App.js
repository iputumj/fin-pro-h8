import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

// styles
import './App.scss';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isSuccess) {
      setIsSuccess(true);

      // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=7690a23c')
      fetch('http://www.omdbapi.com/?&apikey=7690a23c&s=naruto')
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
        });
    }
  }, [isSuccess]);

  return (
    <div className='app'>
      <Header title='FinProH8' />
      <div className='app-content'>
        <h2>Show your favorite movies</h2>
        <Movie movies={movies} />
      </div>
    </div>
  );
};

export default App;
