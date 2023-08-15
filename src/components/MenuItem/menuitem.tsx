import React from 'react';

import './menuitem.css';

const menuitem = ({title = '', price = '', desc = ''}) => (
  <div className='app__menu'>
    <div>
      <h3>{title}</h3>
      <div className='app__menu-content_line'></div>
      <h4>{price}</h4>
    </div>
    <div>
      <p>{desc}</p>
    </div>
  </div>
);

export default menuitem;