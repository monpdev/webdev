/* RaceDay.js Determine start time for runners. Part of Codecademy Web Dev Track */
let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;

let runnerAge = 18;

if (runnerAge > 18 && regEarly === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && regEarly === true){
  console.log(`Runner Race Number ${raceNumber} will start at 9:30 am.`);
} else if (runnerAge > 18 && !regEarly){
  console.log(`Runner Race Number ${raceNumber} will start at 11:00 am.`)
} else if (runnerAge < 18){
  console.log(`Runner Race Number ${raceNumber} will start at 12:30 am.`)
} else if (runnerAge === 18){
  console.log(`Runner Race Number ${raceNumber}, please see the registration desk`)
}
