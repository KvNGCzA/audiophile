import { Link } from 'react-router-dom';

import './index.scss';

const Hero = () => (
  <div className='hero' id='home-hero'>
    <div className='content'>
      <p className='highlight'>new product</p>
      <h2>XX99 Mark II Headphones</h2>
      <p className='excerpt'>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>

      <Link to='/category/headphones/xx99-mark-two-headphones'>
        <button className='btn btn--default'>see product</button>
      </Link>
    </div>
  </div>
);

export default Hero;
