import React from 'react';

import './awards.css';
import { Laurels } from '../../components';

const laurelComp = [
  {
    award: '2',
    title: 'Bib Gourmond',
    desc:'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    award: '1',
    title: 'Rising Star',
    desc:'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    award: '5',
    title: 'AA Hospitality ',
    desc:'Lorem ipsum dolor sit amet, consectetur.'
  },
  {
    award: '3',
    title: 'Outstanding Chef',
    desc:'Lorem ipsum dolor sit amet, consectetur.'
  }
]

const awards = () => (
  <div className='app__awards app__bg'>
    <div className='app__awards-content'>
      <div className='app__awards-content_main'>
        <h2>Awards & recognition</h2>
        <img src='./assets/spoon.png' alt='spoon'/>
        <h3>Our Laurels</h3>
      </div>
      <div className='app__awards-content_laurels'>
        <div className='app__awards-content_laurels-content'>
          <Laurels award={laurelComp[0].award} title={laurelComp[0].title} desc={laurelComp[0].desc}/>
          <Laurels award={laurelComp[1].award} title={laurelComp[1].title} desc={laurelComp[1].desc}/>
        </div>
        <div className='app__awards-content_laurels-content'>
          <Laurels award={laurelComp[2].award} title={laurelComp[2].title} desc={laurelComp[2].desc}/>
          <Laurels award={laurelComp[3].award} title={laurelComp[3].title} desc={laurelComp[3].desc}/>
        </div>
      </div>
    </div>
    <div className='app__awards-img'>
      <img src='./assets/laurels.png' alt='laurels'/>
    </div>
  </div>
);

export default awards;