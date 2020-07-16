const dnaDict = { 
  'G' : 'C', 
  'C' : 'G',
  'T' : 'A',
  'A' : 'U' 
};

export const toRna = (adn) => {
  let i = 0;
  let rna = '';
  for (i; i < adn.length; i++) { 
    rna += dnaDict[adn[i]];
  }
  return rna;
}