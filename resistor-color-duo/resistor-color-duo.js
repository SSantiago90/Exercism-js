//Added resistor-color import from previous exercise
import { colorCode }  from '../resistor-color/resistor-color';

//Added array destructuring on function parameters
export const decodedValue = ([color1,color2]) => {

  //reusability of the 'colorCode' function from previous exercise
  let code1 = colorCode(color1);
  let code2 = colorCode(color2);
  
  // using explicit math and avoid casting to String on return statement
  return (code1 * 10 + code2);
};

