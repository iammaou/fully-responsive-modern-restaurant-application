import React from 'react';

import './aboutus.css';
import { Article } from '../../components';

const aboutData = [
  {
    title: 'About Us',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.'
  },
  {
    title: 'Our History',
    text: 'Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.'
  }
]

const About = () => (
  <div className='restaurant__about app__bg'>
    <div className='restaurant__about-item_one'>
      <Article title={aboutData[0].title} text={aboutData[0].text}/>
    </div>
    <div className='restaurant__about-images'>
      <p><img src='./assets/knife.png' alt='knife' className='knife-image'/></p>
      {/* <p><img src='./assets/G.png' alt='G' className='letter-image'/></p> */}
    </div>
    <div className='restaurant__about-item_two'>
      <Article title={aboutData[1].title} text={aboutData[1].text}/>
    </div>
  </div>
);

export default About;