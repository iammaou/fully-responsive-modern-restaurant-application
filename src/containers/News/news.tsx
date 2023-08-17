import React from 'react';

import './news.css';

const news = () => (
  <div className='app__news'>
    <h5>Newsletter</h5>
    <img src='./assets/spoon.png' alt='spoon'/>
    <h2>Subscribe to Our Newsletter</h2>
    <p>And never miss latest Updates!</p>
    <div className='app__news-input'>
      <input type='email' placeholder='Email Address'/>
      <button>Subscribe</button>
    </div>
  </div>
);

export default news;