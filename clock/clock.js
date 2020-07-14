export class Clock {
    constructor(hs,min=0) {    
      //initializing values rounded down to avoid floating value from user input
      this.hours = Math.floor(hs);
      this.minutes =  Math.floor(min);    
      //Helper function to assure values are valid 
      this.checkLimits();
      return this;
    }

    toString() {
      // This implementation could be improved using String.prototype.padStart();
      // But i wanted to solve it without googling, so I'll leave it like it is
      let helperH = '', helperM = '';
      if (this.minutes < 10) helperM = '0';
      if (this.hours < 10) helperH = '0';
      return `${helperH}${this.hours}:${helperM}${this.minutes}`;
    }

    plus(min) {
      this.hours += Math.floor(min / 60);
      this.minutes += Math.floor(min % 60);
      this.checkLimits();      
      return this;
    }

    minus(min) {
      this.hours -= Math.floor(min / 60);
      this.minutes -= Math.floor(min % 60);
      this.checkLimits();
      return this;
    }

    equals(clock) {
      return ((this.hours == clock.hours) && (this.minutes == clock.minutes));
    }

    checkLimits(){
      //If minutes becomes a negative value, we decrease one hour and add minutes to get a correct value for minutes
      while (this.minutes < 0){        
        this.minutes+= 60;
        this.hours--;
      }
      //When minutes becomes a value above 60, we take one hour from it (60 min) and increase 1 to hours
      while (this.minutes >= 60){
        this.hours++;
        this.minutes-= 60;
      }
      //If hours becomes a negative value or above 24, reset it from 0:00
      while (this.hours < 0){
        this.hours+=24;        
      }      
      while (this.hours >= 24){
        this.hours-=24;
      }
      if (this.hours === 24) this.hours = 0;
    }
  }
