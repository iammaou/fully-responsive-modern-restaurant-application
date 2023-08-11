import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
      <a href='#home'>Home</a>
      <a href='#pages'>Pages</a>
      <a href='#contact'>Contact</a>
      <a href='#blog'>Blog</a>
      <a href='#landing'>Landing</a>
  </>
)

const Login = () => (
  <>
    <a href='#home'>Log in / Registration</a>
    <div className='restaurant__navbar-registration_line'></div>
    <a href='#home'>Book Table</a>
  </>
)

function Navbar(){
  const [toggleMenu, setToggleMenu] = useState(false); //used for the hamburger menu on the mobile version

  return(
    <div className='restaurant__navbar'>
      <div>
        <h1>Gerícht</h1>
      </div>
      <div className='restaurant__navbar-navigation'>
        <Menu />
      </div>
      <div className='restaurant__navbar-registration'>
        <Login />
      </div>

      <div className='restaurant__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className='restaurant__navbar-menu_container scale-up-center'>
            <div className='restaurant__navbar-menu_container-links'>
              <Menu />
            <div className='restaurant__navbar-menu_container-links-sign'>
              <Login/>
            </div>
            </div>
          </div>
      )}
      </div>
    </div>
  )
};

export default Navbar;