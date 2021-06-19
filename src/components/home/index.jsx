import Categories from './categories';
import Hero from './hero';
import './index.scss';

const Home = () => {
  return (
    <div className='main'>
      <Hero />
      <div className='body'>
        <Categories /> 
      </div>
    </div>
  );
};

export default Home;
