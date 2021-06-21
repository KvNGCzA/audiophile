import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.scss';
import Categories from '../common/categories';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Cart } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuEl = useRef(null);

  const handleMenuToggle = () => {
    document.body.style.position = menuOpen ? 'initial' : 'fixed';
    setMenuOpen(!menuOpen);
    menuOpen && menuEl.current.scrollTo(0, 0);
  };

  return (
    <header>
      <div className='header-content view-width'>
        <div className='logo-cont'>
          <Hamburger className='hamburger' onClick={handleMenuToggle} />
          <Link to='/'>
            <Logo className='main-logo' />
          </Link>
        </div>

        <Link to='/'>
          <Logo className='mobile-logo' />
        </Link>

        <ul id='menu-desktop'>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/headphones'>
              headphones
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/speakers'>
              speakers
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/earphones'>
              earphones
            </NavLink>
          </li>
        </ul>

        <Cart />
      </div>
      <div
        ref={menuEl}
        className='mobile-menu'
        style={{
          display: menuOpen ? 'block' : 'none',
        }}
      >
        <div className='mobile-menu-content'>
          <Categories callback={handleMenuToggle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
