import { useEffect, useState } from 'react';

import './index.scss';
import Quantity from '../quantity';

const CartItem = ({ id, quantity, name, image, price, category }) => {
  return (
    <div className='cart-item'>
      <div className='left'>
        <img src={`${process.env.PUBLIC_URL}${image}`} alt='' />
        <div className='info'>
          <span className='name'>{name.replace(category, '')}</span>
          <span className='price'>${price}</span>
        </div>
      </div>

      <div className='right'>
        <Quantity
          value={quantity}
          // handleIncrease={handleIncrease}
          // handleDecrease={handleDecrease}
        />
      </div>
    </div>
  );
};

const Cart = ({ cartOpen }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartOpen) {
      const cartContents = JSON.parse(localStorage.getItem('cart') || '[]');
      const total = cartContents
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue);

      setTotal(total);
      setCart(cartContents);
    }
  }, [cartOpen]);

  const handleRemoveAll = () => {
    localStorage.setItem('cart', '[]');
    setCart([]);
  };

  return (
    <div
      className='cart-cont'
      style={{
        display: !cartOpen ? 'none' : 'block',
      }}
    >
      <div className='cart'>
        <div className='cart-header'>
          <p>cart ({cart.length})</p>
          <button onClick={handleRemoveAll}>Remove all</button>
        </div>

        <div className='cart-items'>
          {cart.map(item => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>

        <div className='total-cont'>
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button className='btn btn--default checkout-btn'>checkout</button>
      </div>
    </div>
  );
};

export default Cart;
