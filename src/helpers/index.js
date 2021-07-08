export const addCommasToPrice = price => {
  const revPrice = reverseString(`${price}`);

  const splitRevPrice = revPrice.match(/.{1,3}/g).join(',');

  return reverseString(splitRevPrice);
};

const reverseString = str => {
  return str.split('').reverse().join('');
};
