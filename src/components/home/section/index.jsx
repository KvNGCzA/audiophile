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
          <button className='btn btn--black'>see product</button>
        </div>
      </div>
    </div>

    <div className='second'>
      <h4>ZX7 SPEAKER</h4>
      <button className='btn btn--transparent'>see product</button>
    </div>
  
    <div className='third'>
      <div></div>
      <div>
        <h4>ZX7 SPEAKER</h4>
        <button className='btn btn--transparent'>see product</button>
      </div>
    </div>
  </section>
);

export default Section;
