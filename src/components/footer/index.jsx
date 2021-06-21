import { Link } from 'react-router-dom';

import './index.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Facebook } from '../../assets/icons/icon-facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/icon-instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/icon-twitter.svg';

const Footer = () => (
  <footer>
    <div className='design' />
    <div className='footer-content view-width'>
      <div className='left'>
        <Link to='/'>
          <Logo />
        </Link>

        <ul>
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
        <p className='mission'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className='copyright-cont'>
          <p className='copyright'>Copyright 2021. All Rights Reserved</p>
          <div className='social-icons'>
            <Facebook className='icon' />
            <Twitter className='icon' />
            <Instagram className='icon' />
          </div>
        </div>
      </div>

      <div className='right'>
        <ul>
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
        <div className='social-icons'>
          <Facebook className='icon' />
          <Twitter className='icon' />
          <Instagram className='icon' />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
