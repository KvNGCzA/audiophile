import './index.scss';

const Quantity = ({ handleIncrease, handleReduce, value }) => (
  <div className='quantity-cont'>
    <button onClick={handleReduce}>-</button>
    <input type='text' value={value} />
    <button onClick={handleIncrease}>+</button>
  </div>
);

export default Quantity;
