import { Link } from 'react-router-dom';

import './index.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Cart } from '../../assets/icons/icon-cart.svg';
import { ReactComponent as Hamburger } from '../../assets/icons/icon-hamburger.svg';

const Header = () => (
  <header>
    <div className='header-content view-width'>
      <div className='logo-cont'>
        <Hamburger className='hamburger' />
        <Logo />
      </div>

      <ul id='menu-desktop'>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/headphones'>headphones</Link>
        </li>
        <li>
          <Link to='/speakers'>speakers</Link>
        </li>
        <li>
          <Link to='/earphones'>earphones</Link>
        </li>
      </ul>

      <Cart />
    </div>
  </header>
);

export default Header;
