import { Fragment } from 'react';

const PaymentMethod = ({ setPaymentMethod, paymentMethod }) => (
  <Fragment>
    <p className='payment-method-label'>Payment Method</p>
    <div className='payment-methods'>
      <div
        className={`check-cont${paymentMethod === 'emon' ? ' active' : ''}`}
        onClick={() => setPaymentMethod('emon')}
      >
        <div className='check-box-circle'>
          <div className='check-box-inner-circle'></div>
        </div>
        <label className='payment-method-label'>e-Money</label>
      </div>

      <div
        className={`check-cont${paymentMethod !== 'emon' ? ' active' : ''}`}
        onClick={() => setPaymentMethod('pod')}
      >
        <div className='check-box-circle'>
          <div className='check-box-inner-circle'></div>
        </div>
        <label className='payment-method-label'>Cash on Delivery</label>
      </div>
    </div>
  </Fragment>
);

export default PaymentMethod;
