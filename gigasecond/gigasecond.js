const gigasec = 1000000000;

export const gigasecond = (date) => {
  //get input date only in miliseconds 
  let msdate = date.getTime();
   
  //total time in miliseconds from inputdate plus 1 gigaseconds 
  let resDate = new Date(gigasec * 1000 + msdate);
  return resDate;  

};
