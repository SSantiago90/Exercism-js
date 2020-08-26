//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num <= 0)
    throw new Error('Classification is only possible for natural numbers.');
  let factor = 1;
  let aliquot = 0;

  while ((aliquot < num) && (factor < num))  {
    if ((num % factor) === 0)
      aliquot += factor;
    factor++;
  }

  if (aliquot === num){
    return 'perfect';
  }
  else{
    return ( aliquot > num?  'abundant' :  'deficient');
  }
};
