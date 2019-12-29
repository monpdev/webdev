

/*sleepDebtCalculator.js calculate
ideal hours of sleep compare to actual sleep in one week. Part of Codecademy Web Dev Track*/
/*create a function that returns any given night's number of hours of rest*/
const getSleepHours = day =>{
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 6;
      break;  
    case 'wednesday':
      return 5;
      break; 
   case 'thursday':
      return 5;
      break; 
   case 'friday':
      return 8;
      break; 
    case 'saturday':
      return 6;
      break; 
     case 'sunday':
      return 6;
      break; 
  };
};

/*test by calling getSleepHours function*/
console.log(getSleepHours('wednesday'));


const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday') ;

//Test getActualSleepHours
console.log(getActualSleepHours());

getIdealSleepHours = (hour) => { 
  var idealHours = hour;
  return idealHours*7;
}

console.log(getIdealSleepHours(8));

//create a function to calculate
//sleep debt
calculateSleepDebt = ()=>{
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours ){
    console.log('Your sleep hours are perfect.');
  } else if(actualSleepHours > idealSleepHours) {
    console.log('You sleep '+(actualSleepHours - idealSleepHours)+ ' more hrs than needed!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You are sleep-deprived for ' + (idealSleepHours-actualSleepHours)+ 'hrs this week');
  }
};

//test out calculateSleepDebt function
calculateSleepDebt();
