import React from 'react';
import Search from './Search';

// styles
import './Header.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-logo'>
          <h1>{props.title}</h1>
        </div>
        <div className='header-search'>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
