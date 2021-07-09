import { Fragment, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
import { ReactComponent as PayOnDelivery } from '../../assets/icons/pay-on-delivery.svg';

const InputField = ({ label, placeholder, required, type, styles }) => (
  <div className='input-field' style={styles && styles.cont}>
    <label style={styles && styles.label}>{label}</label>
    <input type={type} placeholder={placeholder} required={required} />
  </div>
);

const BillingDetails = () => (
  <div className='group'>
    <h4>billing details</h4>
    <div className='group-inputs'>
      <InputField label='name' placeholder='Alexei Ward' type='text' required />

      <InputField
        label='email address'
        placeholder='alexei@mail.com'
        type='email'
        required
      />

      <InputField
        label='phone number'
        placeholder='+1 202-555-0136'
        type='tel'
        required
      />
    </div>
  </div>
);

const ShippingInfo = () => (
  <div className='group'>
    <h4>shipping info</h4>
    <div className='group-inputs--single'>
      <InputField
        label='Address'
        placeholder='1137 Williams Avenue'
        type='text'
        required
      />
    </div>
    <div className='group-inputs'>
      <InputField label='zip code' placeholder='10001' type='number' required />

      <InputField label='city' placeholder='New York' type='text' required />

      <InputField
        label='country'
        placeholder='United States'
        type='text'
        required
      />
    </div>
  </div>
);

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

const PaymentDetails = ({ setPaymentMethod, paymentMethod }) => {
  return (
    <div className='group'>
      <h4>payment details</h4>
      <div className='group-inputs'>
        <PaymentMethod
          setPaymentMethod={setPaymentMethod}
          paymentMethod={paymentMethod}
        />
        <InputField
          label='e-Money Number'
          placeholder='238521993'
          type='number'
          required
          styles={{
            label: {
              textTransform: 'initial',
            },
            cont: {
              display: paymentMethod === 'emon' ? 'flex' : 'none',
            },
          }}
        />

        <InputField
          label='e-Money PIN'
          placeholder='6891'
          type='number'
          required
          styles={{
            label: {
              textTransform: 'initial',
            },
            cont: {
              display: paymentMethod === 'emon' ? 'flex' : 'none',
            },
          }}
        />
      </div>

      <div
        className='note'
        style={{
          display: paymentMethod !== 'emon' ? 'flex' : 'none',
        }}
      >
        <PayOnDelivery className='pod-img' />
        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </div>
  );
};

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

const Right = () => <div className='right'></div>;

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
