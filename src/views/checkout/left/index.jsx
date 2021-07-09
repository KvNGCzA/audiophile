import BillingDetails from '../billingDetails';
import PaymentDetails from '../paymentDetails';
import ShippingInfo from '../shippingInfo';

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

export default Left;
