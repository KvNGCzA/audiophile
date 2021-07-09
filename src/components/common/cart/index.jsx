import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
import Quantity from '../quantity';
import { addCommasToPrice } from '../../../helpers';

const CartItem = ({
  id,
  quantity,
  name,
  image,
  price,
  category,
  updateCart,
}) => {
  return (
    <div className='cart-item'>
      <div className='left'>
        <img src={`${process.env.PUBLIC_URL}${image}`} alt='' />
        <div className='info'>
          <span className='name'>{name.replace(category, '')}</span>
          <span className='price'>${addCommasToPrice(price)}</span>
        </div>
      </div>

      <div className='right'>
        <Quantity
          value={quantity}
          styles={{
            button: {
              padding: '0.5em',
            },
            input: {
              padding: '0.5em 0',
            },
          }}
          handleIncrease={() => updateCart({ id, action: '+' })}
          handleDecrease={() => updateCart({ id, action: '-' })}
        />
      </div>
    </div>
  );
};

const Cart = ({ cartOpen, toggleCart }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (cartOpen) {
      initializeCart();
      body.style.overflowY = 'hidden';
    }

    return () => {
      body.style.overflowY = 'scroll';
    };
  }, [cartOpen]);

  const initializeCart = () => {
    const cartContents = JSON.parse(localStorage.getItem('cart') || '[]');
    let total = cartContents.map(item => item.price * item.quantity);

    total =
      total.length &&
      total.reduce((accumulator, currentValue) => accumulator + currentValue);

    setTotal(total);
    setCart(cartContents);
  };

  const handleRemoveAll = () => {
    localStorage.setItem('cart', '[]');
    setCart([]);
    setTotal(0);
  };

  const updateCart = ({ id, action }) => {
    const cartItem = cart.find(item => item.id === id);
    let updatedCart = [];

    if (action === '+') cartItem.quantity += 1;
    else cartItem.quantity -= 1;

    if (cartItem.quantity <= 0)
      updatedCart = [...cart].filter(item => item.id !== id);
    else
      updatedCart = [...cart].map(item => {
        if (item.id === id) return cartItem;
        else return item;
      });

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    initializeCart();
  };

  return (
    <div
      className='cart-cont'
      style={{
        display: !cartOpen ? 'none' : 'flex',
      }}
    >
      <div className='cart'>
        {cart.length > 0 ? (
          <Fragment>
            <div className='cart-header'>
              <p>cart ({cart.length})</p>
              <button onClick={handleRemoveAll}>Remove all</button>
            </div>

            <div className='cart-items'>
              {cart.map(item => (
                <CartItem {...item} key={item.id} updateCart={updateCart} />
              ))}
            </div>

            <div className='total-cont'>
              <span>Total</span>
              <span>${addCommasToPrice(total)}</span>
            </div>

            <Link to='/checkout' onClick={toggleCart}>
              <button
                className='btn btn--default checkout-btn'
                disabled={cart.length <= 0}
              >
                checkout
              </button>
            </Link>
          </Fragment>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
