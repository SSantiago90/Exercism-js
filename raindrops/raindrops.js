export const convert = (n) => {
  let rainStr = '';
  if (typeof(n) !== 'number')
    throw new Error('Expected number value as inputs, instead recieved ' + typeof(n));
    
  if (!(n % 3)) rainStr += 'Pling';
  if (!(n % 5)) rainStr += 'Plang';
  if (!(n % 7)) rainStr += 'Plong';

  return( rainStr.length > 0? rainStr : String(n));
  
};
