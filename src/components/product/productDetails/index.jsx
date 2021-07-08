import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';
import AlsoLike from '../alsoLike';
import Gallery from '../gallery';
import Quantity from '../../common/quantity';
import { addCommasToPrice } from '../../../helpers';

const ProductDetails = ({
  id,
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
  const [quantity, setQuantity] = useState(1);

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

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const addToCart = () => {
    const freshCart = JSON.parse(localStorage.getItem('cart') || '[]');
    let newCart = [...freshCart];
    const exists = newCart.find(item => item.id === id);

    if (exists) {
      exists.quantity = exists.quantity + quantity;
      newCart = newCart.map(item => {
        if (item.id === id) return exists;

        return item;
      });
    } else {
      newCart.push({
        id,
        quantity,
        image: image.mobile,
        name: name.toLowerCase(),
        price,
        category: category.toLowerCase(),
      });
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
  };

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
            <Quantity
              value={quantity}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
            />
            <button
              className='btn btn--default'
              disabled={quantity ? false : true}
              onClick={addToCart}
            >
              add to cart
            </button>
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
