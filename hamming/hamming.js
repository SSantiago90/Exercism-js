export const compute = (strandA, strandB) => {
  //check for errors beforehand
  lenghtValidate(strandA,strandB);

  let distance = 0;

  for(let i = 0; i < strandA.length; i++){
    if (strandA[i] !== strandB[i])
      distance++;
  }

  return distance;
};

function lenghtValidate(a,b){
  if (a.length !== b.length){
    if (a.length === 0){
      throw new Error('left strand must not be empty');
    } 
    if (b.length === 0){
      throw new Error('right strand must not be empty');
    }   
  throw new Error('left and right strands must be of equal length');
  }
}