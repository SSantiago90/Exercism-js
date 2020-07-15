export const reverseString = (str = '') => {
  let reverStr = '';
  for (let i = str.length; i--; i>0) reverStr += str[i];  
  return reverStr;
};
