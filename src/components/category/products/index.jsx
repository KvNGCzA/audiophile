import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Product = ({
  slug,
  image,
  name,
  description,
  new: newProduct,
  category,
}) => {
  const history = useHistory();
  const [imageType, setImageType] = useState('desktop');

  const handleResize = useCallback(() => {
    if (window.innerWidth < 709 && imageType !== 'mobile') {
      setImageType('mobile');
    } else if (
      window.innerWidth > 708 &&
      window.innerWidth < 1024 &&
      imageType !== 'tablet'
    ) {
      setImageType('tablet');
    } else if (imageType !== 'desktop') {
      setImageType('desktop');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <div className='product'>
      <div
        className='image-cont'
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}${image[imageType]}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className='text-cont'>
        <p className='ad'>{newProduct ? 'new product' : ''}</p>
        <h2>{name}</h2>
        <p className='desc'>{description}</p>
        <button
          className='btn btn--default'
          onClick={() => {
            history.push(`/category/${category}/${slug}`);
          }}
        >
          see product
        </button>
      </div>
    </div>
  );
};

const Products = ({ products }) => {
  return (
    <div className='products'>
      {products.map(product => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
