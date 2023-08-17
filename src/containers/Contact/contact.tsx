import React from 'react';

import './contact.css';

const Contact = () => (
  <div className='app__contact app__bg'>
    <div className='app__contact-content'>
      <h5>Contact</h5>
      <img src='./assets/spoon.png' alt='spoon'/>
      <h2>Find Us</h2>
      <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <h4>Opening Hours</h4>
      <h3>Mon - Fri: 10:00 am - 02:00 am</h3>
      <h3 style={{paddingBottom:48}}>Sat - Sun: 10:00 am - 03:00 am</h3>
      <button>visit us</button>
    </div>
    <div className='app__contact-img'>
      <img src='./assets/findus.png' alt='find us'/>
    </div>
  </div>
);

export default Contact;