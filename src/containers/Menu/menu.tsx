import React from 'react';

import './menu.css';
import { MenuItem } from '../../components';

const menuContent = [
  { title: 'Chapel Hill Shiraz', price: '$56', desc: 'AU | Bottle' },
  { title: 'Catena Malbec', price: '$59', desc: 'AR | Bottle' },
  { title: 'La Vieille Rosé', price: '$44', desc: 'FR | 750 ml' },
  { title: 'Rhino Pale Ale', price: '$31', desc: 'CA | 750 ml' },
  { title: `Irish Guinness`, price: '$26', desc: 'IE | 750 ml' },
  { title: 'Aperol Spritz', price: '$20', desc: 'Aperol | Villa Marchesi prosecco | soda | 30ml' },
  { title: `Dark 'N' Stormy`, price: '$16', desc: 'Dark rum | Ginger beer | Slice of lime. ' },
  { title: 'Daiquiri', price: '$10', desc: 'Rum | Citrus juice | Sugar' },
  { title: 'Old Fashioned', price: '$31', desc: 'Bourbon | Brown sugar | Angostura Bitters' },
  { title: 'Negroni', price: '$26', desc: 'Gin | Sweet Vermouth | Campari | Orange garnish' }
]

const menu = () => (
  <div className='app__menu'>
    <header>
      <p>Menu that fits you palatte</p>
      <img src='./assets/spoon.png' alt='spoon'/>
      <h1>Today’s Special</h1>
    </header>
    <div className='app__menu-content'>
        <div>
          <h3>Wine & Beer</h3>
          <MenuItem title={menuContent[0].title} price={menuContent[0].price} desc={menuContent[0].desc}/>
          <MenuItem title={menuContent[1].title} price={menuContent[1].price} desc={menuContent[1].desc}/>
          <MenuItem title={menuContent[2].title} price={menuContent[2].price} desc={menuContent[2].desc}/>
          <MenuItem title={menuContent[3].title} price={menuContent[3].price} desc={menuContent[3].desc}/>
          <MenuItem title={menuContent[4].title} price={menuContent[4].price} desc={menuContent[4].desc}/>
        </div>
        <img src='./assets/menu.png' alt='menu'/>
        <div>
          <h3>Cocktails</h3>
          <MenuItem title={menuContent[5].title} price={menuContent[5].price} desc={menuContent[5].desc}/>
          <MenuItem title={menuContent[6].title} price={menuContent[6].price} desc={menuContent[6].desc}/>
          <MenuItem title={menuContent[7].title} price={menuContent[7].price} desc={menuContent[7].desc}/>
          <MenuItem title={menuContent[8].title} price={menuContent[8].price} desc={menuContent[8].desc}/>
          <MenuItem title={menuContent[9].title} price={menuContent[9].price} desc={menuContent[9].desc}/>
        </div>
    </div>
    <button>view more</button>
  </div>
);

export default menu;