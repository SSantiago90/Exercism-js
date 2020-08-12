const MAPER = ['A','C','G','T'];

export class NucleotideCounts {
  static parse(strand) {
    if (strand.match( /[^ACTG]/g))
      throw new Error('Invalid nucleotide in strand');      
    
    let count = [0,0,0,0];
    strand.split('').forEach( char =>{
      count[MAPER.indexOf(char)]++;
    });

    //Return count formated as a string.
    return `${count[0]} ${count[1]} ${count[2]} ${count[3]}`;
  } 
}
