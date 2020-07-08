//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colArr) => {
  const colors = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  
  let code1 =   colors.indexOf(colArr[0].toLowerCase());
  let code2 =   colors.indexOf(colArr[1].toLowerCase());

  return parseInt(''+code1+code2);
};

