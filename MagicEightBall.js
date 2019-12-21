/*MagicEightBall.js --use control flow in javascript. The user will input a question, the program outputs a random fortune*/
/*Part of Codecademy Web Dev Track */

let userName = 'Jennie';

userName === ''?
console.log('Hello!'):
console.log('Hello, '+userName+'!');

const userQuestion ='Will I be successful?';

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch(randomNumber){ 
  case 0:
      eightBall = 'It is certain';
      break;
  case 1:
      eightBall = 'It is decidedly so';
      break;
  case 2:
      eightBall = 'Reply hazy try again';
      break;
  case 3:
      eightBall = 'Cannot predict now';
      break;
  case 4:
      eightBall = 'Do not count on it';
      break;
  case 5:
      eightBall = 'My sources say no';
      break;    
  case 6:
      eightBall = 'Outlook not so good';
      break;      
  case 7:
      eightBall = 'Signs point to yes';
      break;      
}

console.log(`The eight ball answered: ${eightBall}`);