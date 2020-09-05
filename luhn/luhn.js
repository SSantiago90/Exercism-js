export const valid = (num) => {
  let result = 0;
  let n = 0;
  let evenNumSwitch = false;  
  let noSpacesNum = num.split(' ').join('');
  let arrayNum = noSpacesNum.split('');

  if (!isValid(noSpacesNum))
    return false;
  //takes spaces away and turn string input into array with each number

  while (arrayNum.length >= 1){        
    n = Number(arrayNum.pop());    
    if(evenNumSwitch){
      n = n * 2;
      if (n >= 10) n -= 9;
    }
    result += n;
    evenNumSwitch = !(evenNumSwitch);
  }

  //return result;
  if (result % 10)
    return false;
  else 
    return true;  
};

const isValid = (num) =>{ 
  //if (parseInt(num) == 0) 
  //  return false;
  console.log(num);
  if (num.length < 2) 
    return false;
  let regExpNums = new RegExp(/^[0-9]+$/);  
  if (!(regExpNums.test(num)))    
    return false;    
  return true;
}
