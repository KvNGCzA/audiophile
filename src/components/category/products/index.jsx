import './index.scss';

const Product = ({ image, name, description }) => (
  <div className='product'>
    <div
      className='image-cont'
      style={{
        background: `url('${process.env.PUBLIC_URL}${image.desktop}') no-repeat center center`,
        backgroundSize: 'cover',
      }}
    ></div>
    <div className='text-cont'>
      <p className='ad'>new product</p>
      <h2>{name}</h2>
      <p className='desc'>{description}</p>
      <button className='btn btn--default'>see product</button>
    </div>
  </div>
);

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
