import React from 'react';
import Search from './Search';

// styles
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='header-logo'>
          <h1>FinProH8</h1>
        </div>
        <div className='header-search'>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
