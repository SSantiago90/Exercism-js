export class Triangle {
  constructor(a,b,c) {    
      this.sideA = a;
      this.sideB = b;
      this.sideC = c;
      // boolean for invalid input values
      this.isValid = this.validate()
  }

  isEquilateral() {
    if ((this.sideA == this.sideB) && (this.sideB == this.sideC))
      // Return true if values are valid
      return this.isValid;
    else 
      return false;
  }

  isIsosceles() {
    if ( (this.sideA === this.sideB) || (this.sideB === this.sideC) || (this.sideA === this.sideC))
      return this.isValid;
    else
      return false;
  }

  isScalene() {
    if ((this.isEquilateral()) || (this.isIsosceles()))
      return false;
    else 
      return this.isValid;
  }

  validate(){
    // Check if input are number values
    if ( (typeof( this.sideA + this.sideB + this.sideC ) !== 'number')) 
      return false;

    // Check if input are positive number values
    if (Math.sign(this.sideA)+Math.sign(this.sideB)+Math.sign(this.sideC) !== 3) 
      return false;

    // Check triangle inequality
    if ( (this.sideA > (this.sideB + this.sideC)) || (this.sideB > (this.sideA + this.sideC)) || (this.sideC > (this.sideA + this.sideB)) )
      return false;  
    
    return true;
  }
}