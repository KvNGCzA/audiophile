import { useHistory } from 'react-router-dom';

import './index.scss';

const Card = ({ image, name, slug }) => {
  const history = useHistory();

  return (
    <div className='alsolike-card'>
      <div
        className='alsolike-image'
        style={{
          background: `url('${image.desktop}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      ></div>
      <h2>{name}</h2>
      <button
        className='btn btn--default'
        onClick={() => history.push(`/product/${slug}`)}
      >
        see product
      </button>
    </div>
  );
};

const AlsoLike = ({ items }) => (
  <div className='alsolike-cont'>
    <h2 className='heading'>you may also like</h2>

    <div className='alsolike-content'>
      {items.map(item => (
        <Card {...item} key={item.slug} />
      ))}
    </div>
  </div>
);

export default AlsoLike;
