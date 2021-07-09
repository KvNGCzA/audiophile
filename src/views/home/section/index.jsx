import { Link } from 'react-router-dom';

import './index.scss';
import speaker from '../../../assets/images/image-speaker-zx9.png';

const Section = () => (
  <section>
    <div className='first'>
      <div className='img-cont'>
        <img src={speaker} alt='' />
      </div>
      <div className='text-cont'>
        <div className='text-content'>
          <h4>
            ZX9
            <br /> SPEAKER
          </h4>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/category/speakers/zx9-speaker'>
            <button className='btn btn--black'>see product</button>
          </Link>
        </div>
      </div>
    </div>

    <div className='second'>
      <h4>ZX7 SPEAKER</h4>
      <Link to='/category/speakers/zx7-speaker'>
        <button className='btn btn--transparent'>see product</button>
      </Link>
    </div>

    <div className='third'>
      <div></div>
      <div>
        <h4>YX1 EARPHONES</h4>
        <Link to='/category/earphones/yx1-earphones'>
          <button className='btn btn--transparent'>see product</button>
        </Link>
      </div>
    </div>
  </section>
);

export default Section;
