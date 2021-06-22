import { useHistory } from 'react-router-dom';

import Quantity from '../../common/quantity';
import AlsoLike from '../alsoLike';
import Gallery from '../gallery';
import './index.scss';

const ProductDetails = ({
  image,
  name,
  description,
  price,
  features,
  includes,
  gallery,
  others,
  new: newProduct,
  category,
}) => {
  const history = useHistory();

  return (
    <div className='product-details'>
      <span
        className='back-button'
        onClick={() => history.push(`/category/${category}`)}
      >
        go back
      </span>

      <div className='product-image-cont'>
        <div
          className='image-card'
          style={{
            background: `url('${image.desktop}') no-repeat center center`,
            backgroundSize: 'contain',
          }}
        ></div>

        <div className='text-cont'>
          <span className='ad'>{newProduct ? 'new product' : ''}</span>
          <h2>{name}</h2>
          <p className='desc'>{description}</p>
          <span className='price'>$ {price}</span>
          <div className='quantity-action'>
            <Quantity />
            <button className='btn btn--default'>add to cart</button>
          </div>
        </div>
      </div>

      <div className='descriptions'>
        <div>
          <h2>features</h2>
          <p>{features}</p>
        </div>

        <div>
          <h2>in the box</h2>
          {includes.map(current => (
            <p key={current.item}>
              <span>{current.quantity}x</span> {current.item}
            </p>
          ))}
        </div>
      </div>

      <Gallery {...gallery} />
      <AlsoLike items={others} />
    </div>
  );
};

export default ProductDetails;
