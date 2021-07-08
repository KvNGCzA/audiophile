import Advert from '../../components/common/advert';
import Categories from '../../components/common/categories';
import Hero from './hero';
import './index.scss';
import Section from './section';

const Home = () => {
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
