import InputField from '../inputField';

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

export default ShippingInfo;
