const scrabbleScore = {  a: 1,  b: 3,  c: 3,  d: 2,  e: 1,  f: 4,  g: 2,  h: 4,  i: 1,  j: 8,  k: 5,  l: 1,  m: 3,  n: 1,  o: 1,  p: 3,  q: 10,  r: 1,  s: 1,  t: 1,  u: 1,  v: 4,  w: 4,  x: 8,  y: 4,  z: 10,};

// To make it more "fancy", we could use previous exercise module and call it with the "old" score system. Tho it doesn't seems to be a very practical solution, so I'll leave it out
/*
import {transform} from '../etl/etl.js';
const scrabbleScore = transform({
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
});
*/

export const score = (word) => {    
  //Call reduce method from Array object on the String object Word
  return Array.prototype.reduce.call( 
    word, 
    // first Reduce parameter is the callback Function, recieving as parameters the score acumulator and current item iterating (every letter of the word)
    (score, letter) => 
      //add to accumulator variable the correspondent score of the current letter - parsing iscore as Number and letter to lowercase to avoid errors
      score += Number(scrabbleScore[letter.toLowerCase()])
    // second Reduce parameter is the starting value for the acumulator variable, which in this case is zero  
    ,0);
};
