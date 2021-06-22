import './index.scss';

const Gallery = ({ first, second, third }) => (
  <div className='gallery-cont'>
    <div className='images'>
      <div
        className='gallery-image'
        style={{
          backgroundImage: `url('${first.desktop}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        className='gallery-image'
        style={{
          backgroundImage: `url('${second.desktop}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>

    <div
      className='alone gallery-image'
      style={{
        backgroundImage: `url('${third.desktop}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    ></div>
  </div>
);

export default Gallery;
