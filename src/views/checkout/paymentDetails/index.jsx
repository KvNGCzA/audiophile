import InputField from '../inputField';
import PaymentMethod from '../paymentMethod';
import { ReactComponent as PayOnDelivery } from '../../../assets/icons/pay-on-delivery.svg';

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

export default PaymentDetails;
