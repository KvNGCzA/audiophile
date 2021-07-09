import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';
import BillingDetails from './billingDetails';
import ShippingInfo from './shippingInfo';
import PaymentDetails from './paymentDetails';
import { addCommasToPrice } from '../../helpers';

const Left = ({ setPaymentMethod, paymentMethod }) => (
  <div className='left'>
    <h2>Checkout</h2>
    <BillingDetails />
    <ShippingInfo />
    <PaymentDetails
      setPaymentMethod={setPaymentMethod}
      paymentMethod={paymentMethod}
    />
  </div>
);

const SummaryProduct = ({ cart, total, vat, grandTotal }) => (
  <div className='summary-products'>
    {cart.map(item => (
      <div className='summary-product' key={item.id}>
        <div className='left-summary'>¸
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

const Right = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const cartContents = JSON.parse(localStorage.getItem('cart') || '[]');
    let total = cartContents.map(item => item.price * item.quantity);

    total =
      total.length &&
      total.reduce((accumulator, currentValue) => accumulator + currentValue);

    setTotal(total);
    setCart(cartContents);
    setVat(total * 0.2);
    setGrandTotal(total * 0.2 + total + 50);
  }, []);

  return (
    <div className='right'>
      <h4>summary</h4>

      <SummaryProduct
        cart={cart}
        total={total}
        vat={vat}
        grandTotal={grandTotal}
      />

      <div className='info'>
        <span>Total</span>
        <span>${addCommasToPrice(total)}</span>
      </div>
      <div className='info'>
        <span>shipping</span>
        <span>$50</span>
      </div>
      <div className='info'>
        <span>vat (included)</span>
        <span>${addCommasToPrice(vat)}</span>
      </div>
      <div className='info grand-total'>
        <span>grand total</span>
        <span>${addCommasToPrice(grandTotal)}</span>
      </div>
      <button
        className='btn btn--default continue-btn'
        disabled={cart.length <= 0}
      >
        continue
      </button>
    </div>
  );
};

const Checkout = () => {
  const history = useHistory();
  const [paymentMethod, setPaymentMethod] = useState('emon');

  return (
    <div className='checkout-page'>
      <div className='checkout-page-content view-width'>
        <span className='back-button' onClick={() => history.goBack()}>
          go back
        </span>
        <div className='section-parent'>
          <Left
            setPaymentMethod={setPaymentMethod}
            paymentMethod={paymentMethod}
          />
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
