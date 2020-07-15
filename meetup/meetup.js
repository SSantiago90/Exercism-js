const daysIndex = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const conditionIndex = { 'first': 1 , 'second':8, 'third':15, 'fourth':22, 'teenth':13, 'last': 0};

export const meetup = (year,month,cond,weekday) =>  {
  let dayNum = daysIndex.indexOf(weekday);
  let step = 1;
  //set starting day according given condition
  let day = conditionIndex[cond];

  //if looking for 'last' day, search backwards from next month '0' day => last day of current month
  if (cond === 'last')
    step = -1;
  //if not searching 'last', decreassed month value to fit into Date syntax (0 = Jan, 1 = Feb...)
  else month--;  

  //search correct date -- step 'day' value while weekday defer from the selected one
  while (new Date(year,month,day).getDay() !== dayNum) {
    day += step;
  }
     
  return (new Date(year,month,day))

}
