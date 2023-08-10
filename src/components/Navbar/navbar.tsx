import React from 'react';

import './navbar.css';

const navbar = () => (
  <div className='restaurant__navbar'>
    <div>
      <h1>Gerícht</h1>
    </div>
    <div className='restaurant__navbar-navigation'>
      <a href='#home'>Home</a>
      <a href='#pages'>Pages</a>
      <a href='#contact'>Contact</a>
      <a href='#blog'>Blog</a>
      <a href='#landing'>Landing</a>
    </div>
    <div className='restaurant__navbar-registration'>
      <a href='#home'>Log in / Registration</a>
      <div className='restaurant__navbar-registration_line'></div>
      <a href='#home'>Book Table</a>
    </div>
  </div>
);

export default navbar;