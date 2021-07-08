import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './index.scss';
import Advert from '../../components/common/advert';
import Categories from '../../components/common/categories';
import ProductDetails from './productDetails';

const Product = () => {
  let { productSlug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch('../../data.json');
        data = await data.json();
        data = data.find(current => current.slug === productSlug);

        setProduct(data || {});
      } catch (error) {
        console.log(error);
        setProduct({});
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, [productSlug]);

  return !product.id ? (
    <div>loading</div>
  ) : (
    <div className='product-page'>
      <div className='product-page-content view-width'>
        <ProductDetails {...product} />
        <Categories />
        <Advert />
      </div>
    </div>
  );
};

export default Product;
