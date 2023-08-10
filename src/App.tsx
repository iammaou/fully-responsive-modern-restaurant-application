import React from 'react';

import { AboutUs, Awards, Chef, Contact, Footer, Gallery, Header, Menu, News, Video } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <AboutUs/>
    <Menu/>
    <Chef/>
    <Video/>
    <Awards/>
    <Gallery/>
    <Contact/>
    <News/>
    <Footer/>
  </div>
);

export default App;
