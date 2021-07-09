import { useState, useEffect } from 'react';

import SummaryProduct from '../summaryProduct';
import { addCommasToPrice } from '../../../helpers';

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
    setVat(Math.round(total * 0.2));
    setGrandTotal(Math.round(total * 0.2) + total + 50);
  }, []);

  return (
    <div className='right'>
      <h4>summary</h4>

      <SummaryProduct
        cart={cart}
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

export default Right;
