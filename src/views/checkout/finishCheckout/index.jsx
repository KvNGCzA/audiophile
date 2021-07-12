import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { addCommasToPrice } from '../../../helpers';
import { ReactComponent as CheckMark } from '../../../assets/icons/check-mark-2.svg';

const FinishCheckout = ({ cart, grandTotal, showCheckout }) => {
  const [showProducts, setshowProducts] = useState('one');
  const [products, setproducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    return () => {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflowY = 'scroll';
    };
  }, []);

  useEffect(() => {
    if (showProducts === 'one') {
      cart[0] && setproducts([cart[0]]);
    } else {
      setproducts(cart);
    }
  }, [showProducts, cart]);

  const toggleShowProducts = () => {
    setshowProducts(showProducts === 'one' ? 'all' : 'one');
  };

  return (
    <div
      className='finish-checkout-overlay'
      style={{
        display: showCheckout ? 'flex' : 'none',
      }}
    >
      <div className='finish-checkout-modal'>
        <CheckMark className='check-mark' />
        <h1>
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h1>
        <p className='msg'>You will receive an email confirmation shortly.</p>
        <div className='info-card'>
          <div className='prod-display'>
            {products.map(item => (
              <div className='cart-item' key={item.name}>
                <img src={`${process.env.PUBLIC_URL}${item.image}`} alt='' />
                <div>
                  <p>{item.name.replace(item.category, '')}</p>
                  <p>${addCommasToPrice(item.price)}</p>
                </div>
                <span>x{item.quantity}</span>
              </div>
            ))}
            {cart.length - 1 > 0 ? (
              <button onClick={toggleShowProducts}>
                {showProducts === 'one'
                  ? `and ${cart.length - 1} other item(s)`
                  : 'show less'}
              </button>
            ) : (
              ''
            )}
          </div>

          <div className='grand-total-display'>
            <p>grand total</p>
            <p>{grandTotal}</p>
          </div>
        </div>
        <button
          className='btn btn--default continue-btn'
          onClick={() => {
            history.push('/');
          }}
        >
          back to home
        </button>
      </div>
    </div>
  );
};

export default FinishCheckout;
