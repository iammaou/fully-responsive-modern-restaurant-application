import React from 'react';

import './Laurels.css';

const Laurels = ({award = '', title = '', desc = ''}) => {
  let img = `./assets/award0${award}.png`;

  return(
    <div className='app__laurels'>
      <div className='app__laurels-img'>
        <img src={img} alt='award'/>
      </div>
      <div className='app__laurels-content'>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  )
};

export default Laurels;