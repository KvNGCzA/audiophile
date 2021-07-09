import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';
import Left from './left';
import Right from './right';

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
