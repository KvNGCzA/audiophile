import { addCommasToPrice } from '../../../helpers';

const SummaryProduct = ({ cart  }) => (
  <div className='summary-products'>
    {cart.map(item => (
      <div className='summary-product' key={item.id}>
        <div className='left-summary'>
          <img src={`${process.env.PUBLIC_URL}${item.image}`} alt='' />
          <div className='summary-info'>
            <span className='name'>{item.name.replace(item.category, '')}</span>
            <span className='price'>${addCommasToPrice(item.price)}</span>
          </div>
        </div>
        <div className='right-summary'>x{item.quantity}</div>
      </div>
    ))}
  </div>
);

export default SummaryProduct;
