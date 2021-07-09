import InputField from '../inputField';

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

export default BillingDetails;
