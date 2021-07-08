import './index.scss';

const Quantity = ({ handleIncrease, handleDecrease, value, styles }) => (
  <div className='quantity-cont'>
    <button
      onClick={handleDecrease}
      disabled={value > 1 ? false : true}
      style={styles && styles.button}
    >
      -
    </button>
    <input type='text' value={value} readOnly style={styles && styles.input} />
    <button onClick={handleIncrease} style={styles && styles.button}>
      +
    </button>
  </div>
);

export default Quantity;
