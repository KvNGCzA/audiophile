import './index.scss';

const Gallery = ({ first, second, third }) => (
  <div className='gallery-cont'>
    <div className='images'>
      <div
        className='gallery-image'
        style={{
          background: `url('${first.desktop}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        className='gallery-image'
        style={{
          background: `url('${second.desktop}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      ></div>
    </div>

    <div
      className='alone gallery-image'
      style={{
        background: `url('${third.desktop}') no-repeat center center`,
        backgroundSize: 'cover',
      }}
    ></div>
  </div>
);

export default Gallery;
