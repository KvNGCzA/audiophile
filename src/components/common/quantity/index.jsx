import './index.scss';

const Quantity = ({ handleIncrease, handleDecrease, value }) => (
  <div className='quantity-cont'>
    <button onClick={handleDecrease} disabled={value > 1 ? false : true}>
      -
    </button>
    <input type='text' value={value} readOnly />
    <button onClick={handleIncrease}>+</button>
  </div>
);

export default Quantity;
