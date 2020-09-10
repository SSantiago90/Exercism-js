export const isPangram = (sentence = '') => {
  let charASCCI = 97;
  //let isPangram = false;
  while ( (sentence.toLowerCase().includes(String.fromCharCode(charASCCI++)))  &&  (charASCCI < 124) ) {
    //
  }
  return (charASCCI === 124);
};
