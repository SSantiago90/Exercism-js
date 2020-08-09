import { ALL } from "dns";

const ALLERGENS = {  
  eggs : 1,
  peanuts : 2,
  shellfish : 4,
  strawberries : 8,
  tomatoes : 16,
  chocolate : 32,
  pollen : 64,
  cats : 128,
}


//I think the best approach to this exercise is to work with binary numbers 

export class Allergies {
  constructor(score) {
    this.score = score % 256; 
    //convert score to binary number, and split every number into an array.
    this.scoreBin = (score >>> 0).toString(2).split('').reverse();
  }

  list() {    
    let allergKeys = Object.keys(ALLERGENS);    

    return allergKeys.filter( (elm, index) => {
      return (this.scoreBin[index] == 1);
    });    
  }

  allergicTo(allerg) {
    let val = Object.keys(ALLERGENS).indexOf(allerg);
    return (this.scoreBin[val] === "1");
  }
}
