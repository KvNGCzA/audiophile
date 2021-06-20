import './index.scss';
import adImage from '../../../assets/images/image-best-gear.jpg';

const Advert = () => (
  <div className='advert'>
    <div className='text-content'>
      <h4>
        Bringing you the <span>best</span> audio gear
      </h4>
      <p>Located at the heart of New York City, Audiophile is the premier store or high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    </div>
    <div
      className='image'
      style={{
        background: `url('${adImage}') no-repeat center center`,
        backgroundSize: 'cover',
      }}
    ></div>
  </div>
);

export default Advert;
