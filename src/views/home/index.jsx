import { useEffect } from 'react';

import Hero from './hero';
import './index.scss';
import Section from './section';
import Advert from '../../components/common/advert';
import Categories from '../../components/common/categories';

const Home = () => {
  const handleScroll = () => {
    const hero = document.getElementById('home-hero');
    const header = document.getElementById('site-header');
    const heroHeight = hero?.offsetHeight - header?.offsetHeight;
    const color1 = 'rgba(0, 0, 0, 1)';
    const color2 = 'transparent';

    if (
      window.scrollY > heroHeight &&
      header.style.backgroundColor !== color1
    ) {
      header.style.backgroundColor = color1;
    } else if (
      window.scrollY < heroHeight &&
      header.style.backgroundColor !== color2
    ) {
      header.style.backgroundColor = color2;
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main'>
      <Hero />
      <div className='body view-width'>
        <Categories />
        <Section />
        <Advert />
      </div>
    </div>
  );
};

export default Home;
