import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Products from './products';

import './index.scss';
import Categories from '../../components/common/categories';
import Advert from '../../components/common/advert';

const Category = () => {
  let { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let data = await fetch('../data.json');
        data = await data.json();
        data = data.filter(current => current.category === name);

        setProducts(data);
      } catch (error) {
        console.log(error);
        setProducts([]);
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <div className='category-page'>
      <div className='category-hero'>
        <span>{name}</span>
      </div>

      <div className='category-page-content view-width'>
        <Products products={products} />
        <Categories />
        <Advert />
      </div>
    </div>
  );
};

export default Category;
