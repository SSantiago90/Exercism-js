const primeNumbers = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53];

//I'm stuck with this one. It won't work for the last 2 tests from the suite. Submiting so I can review peer's solutions
export const primeFactors = (n) => {
  let factors = [];
  let index = 0;
  
  divAux(n,factors,index);

  return factors;
  
};

const divAux = (n,factors,i) =>{ 
  if ( n === primeNumbers[i]){
    factors.push(primeNumbers[i]);
    return;
  }
  if (n === 1)
    return;  
  if (n % primeNumbers[i] !== 0){
    divAux (n,factors, ++i);
  }
  else {
    factors.push(primeNumbers[i]);
    divAux(n / primeNumbers[i], factors, i);
  }
}