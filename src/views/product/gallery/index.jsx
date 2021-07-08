import './index.scss';

const Gallery = ({ first, second, third, imageType }) => (
  <div className='gallery-cont'>
    <div className='images'>
      <div
        className='gallery-image'
        style={{
          backgroundImage: `url('${first[imageType]}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        className='gallery-image'
        style={{
          backgroundImage: `url('${second[imageType]}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>

    <div
      className='alone gallery-image'
      style={{
        backgroundImage: `url('${third[imageType]}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
      }}
    ></div>
  </div>
);

export default Gallery;
