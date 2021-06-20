import Advert from '../common/advert';
import Categories from '../common/categories';
import Hero from './hero';
import './index.scss';
import Section from './section';

const Home = () => {
  return (
    <div className='main'>
      <Hero />
      <div className='body'>
        <Categories />
        <Section />
        <Advert />
      </div>
    </div>
  );
};

export default Home;
