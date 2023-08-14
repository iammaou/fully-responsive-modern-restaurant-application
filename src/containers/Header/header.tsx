import React from 'react';

import './header.css';

const Header = () => (
  <div className='restaurant__header'>
    <div className='restaurant__header-content'>
      <h3>Chase the new Flavour</h3>
      <img src='./assets/spoon.png' alt='spoon'/>
      <h1 className='golden__text'>The key to Fine dining</h1>
      <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button>Explore Menu</button>
    </div>
    <div className='restaurant__header-img'>
      <img src='./assets/welcome.png' alt='welcome'/>
    </div>
  </div>
);

export default Header;