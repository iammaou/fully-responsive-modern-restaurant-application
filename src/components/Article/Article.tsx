import React from 'react';

import './article.css';

const Article = ({title = '', text = ''}) => (
  <div className='restaurant__article'>
    <h1>{title}</h1>
    <h3>
      <img src='./assets/spoon.png' alt='spoon'/>
    </h3>
    <p>{text}</p>
    <h3>
      <button>know more</button>
    </h3>
  </div>
);

export default Article;