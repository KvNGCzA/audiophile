import { Fragment, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './index.scss';
import Categories from '../common/categories';
import Cart from '../common/cart';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as CartLogo } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const menuEl = useRef(null);

  const handleMenuToggle = () => {
    document.body.style.position = menuOpen ? 'initial' : 'fixed';
    setMenuOpen(!menuOpen);
    menuOpen && menuEl.current.scrollTo(0, 0);
  };

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <Fragment>
      <header
        style={{
          backgroundColor: location.pathname === '/' ? '' : 'rgba(0, 0, 0, 1)',
        }}
      >
        <div className='header-content view-width'>
          <div className='logo-cont'>
            <Hamburger className='hamburger' onClick={handleMenuToggle} />
            <Link to='/'>
              <Logo className='main-logo' />
            </Link>
          </div>

          <Link className='mobile-logo' to='/'>
            <Logo />
          </Link>

          <ul id='menu-desktop'>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/category/headphones'>
                headphones
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/category/speakers'>
                speakers
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to='/category/earphones'>
                earphones
              </NavLink>
            </li>
          </ul>

          <div className='cart-logo-cont'>
            {/* <span className='cart-count'>10</span> */}
            <CartLogo
              onClick={handleCartToggle}
              className='cart-logo'
              fill={cartOpen ? 'rgba(216, 125, 74, 1)' : '#FFF'}
            />
          </div>
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
      <Cart cartOpen={cartOpen} />
    </Fragment>
  );
};

export default Header;
