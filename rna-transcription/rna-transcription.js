/*const dnaDict = { 'G' : 'C', 'C' : 'G', 'T' : 'A', 'A' : 'U' };*/

//Using Map constructor instead of default object
const dnaMap = new Map([['G','C'], ['C','G'], ['T','A'], ['A','U']]); 

export const toRna = (dna) => {  
  /* For...of implementation
  let rna = '';
  for (let letter of dna){
    rna += dnaDict[dna[i]];
  }
  */

  /* Array.map implementation
  let rna = Array.prototype.map.call(dna, letter => {
    return dnaDict[letter];
  }).join(''); 
  */   

  /* Array.map straight on return method
  return (Array.prototype.map.call(dna, letter =>{
    return dnaMap.get(letter);
  }).join(''));*/

  //For...of using dnaMap
  let rna = '';
  for(let letter of dna){
    rna+= dnaMap.get(letter);  
  }
  return rna;
}