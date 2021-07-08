import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';
import AlsoLike from '../alsoLike';
import Gallery from '../gallery';
import Quantity from '../../common/quantity';
import { addCommasToPrice } from '../../../helpers';

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
  const [imageType, setImageType] = useState('desktop');

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 708 && imageType !== 'mobile') {
      setImageType('mobile');
    } else if (
      window.innerWidth > 708 &&
      window.innerWidth <= 1024 &&
      imageType !== 'tablet'
    ) {
      setImageType('tablet');
    } else if (window.innerWidth > 1024 && imageType !== 'desktop') {
      setImageType('desktop');
    }
  }, [imageType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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
            backgroundImage: `url('${image[imageType]}')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
          }}
        ></div>

        <div className='text-cont'>
          <span className='ad'>{newProduct ? 'new product' : ''}</span>
          <h2>{name}</h2>
          <p className='desc'>{description}</p>
          <span className='price'>$ {addCommasToPrice(`${price}`)}</span>
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
          <div>
            {includes.map(current => (
              <p key={current.item}>
                <span>{current.quantity}x</span> {current.item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Gallery {...gallery} imageType={imageType} />
      <AlsoLike items={others} imageType={imageType} />
    </div>
  );
};

export default ProductDetails;
