import React from 'react';

import './menuitem.css';

const menuitem = ({title = '', price = '', desc = ''}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-content_main'>
      <h3>{title}</h3>
      <div className='app__menuitem-content_main-price'>
        <div className='app__menuitem-content_line'></div>
        <h4>{price}</h4>
      </div>
    </div>
    <div>
      <p>{desc}</p>
    </div>
  </div>
);

export default menuitem;