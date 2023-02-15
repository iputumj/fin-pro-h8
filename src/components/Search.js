import React from 'react';

// styles
import './Search.scss';

const Search = () => {
  return (
    <div className='search-container'>
      <input
        type='text'
        id='search'
        className='search'
        placeholder='Search...'
      />
      <button className='button-search'>Search</button>
    </div>
  );
};

export default Search;
