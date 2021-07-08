import { useHistory } from 'react-router-dom';

import './index.scss';

const Card = ({ image, name, slug, category, imageType }) => {
  const history = useHistory();

  return (
    <div className='alsolike-card'>
      <div
        className='alsolike-image'
        style={{
          backgroundImage: `url('${image[imageType]}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
        }}
      ></div>
      <h2>{name}</h2>
      <button
        className='btn btn--default'
        onClick={() => history.push(`/category/${category}/${slug}`)}
      >
        see product
      </button>
    </div>
  );
};

const AlsoLike = ({ items, imageType }) => (
  <div className='alsolike-cont'>
    <h2 className='heading'>you may also like</h2>

    <div className='alsolike-content'>
      {items.map(item => (
        <Card {...item} imageType={imageType} key={item.slug} />
      ))}
    </div>
  </div>
);

export default AlsoLike;
