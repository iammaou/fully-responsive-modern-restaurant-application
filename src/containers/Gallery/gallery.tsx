import React from 'react';

import './gallery.css';

const Gallery = () => (
  <div className='app__gallery'>
    <div className='app__gallery-content'>
        <h5>Instagram</h5>
        <img src='./assets/spoon.png' alt='spoon'/>
        <h2>Photo Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button>view more</button>
    </div>
    <div className='app__gallery-images'>
      <img src='./assets/gallery01.png' alt='gallery01'/>
      <img src='./assets/gallery02.png' alt='gallery02'/>
      <img src='./assets/gallery03.png' alt='gallery03'/>
    </div>
  </div>
);

export default Gallery;