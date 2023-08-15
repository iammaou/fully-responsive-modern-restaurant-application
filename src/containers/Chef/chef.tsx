import React from 'react';

import './chef.css';

const Chef = () => (
  <div className='app__chef app__bg'>
    <div className='app__chef-img'>
      <img src='./assets/chef.png' alt='chef'/>
    </div>
    <div className='app__chef-content'>
      <h5>Chef’s Word</h5>
      <img src='./assets/spoon.png' alt='spoon'/>
      <h1>What we believe in</h1>
      <div className='app__chef-content_quote'>
        <img src='./assets/quote.png' alt='quote'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>
      <h3>Kevin Luo</h3>
      <h4>Chef & Founder</h4>
      <img src='./assets/sign.png' alt='signature' className='app__chef-content_signature'/>
    </div>
  </div>
);

export default Chef;