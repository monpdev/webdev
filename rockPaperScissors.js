/*rockPaperScissors.js practicing javascript. Part of Codecademy Web Dev track. */
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors'|| userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Input is invalid');
  }
};

function getComputerChoice() {
  switch(Math.floor(Math.random()*3)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper';
      break;
  	};
}

function determineWinner(userChoice,computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The Computer Wins!';
    } else {
      return 'You Win!';
    }
  } else if (userChoice === 'paper'){
    if (compterChoice === 'scissors') {
      return 'The Computer Wins!';
    }else {
      return 'You Win!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The Computer Wins!';
    } else {
      return 'You Win!';
    }
  } else if (userChoice === 'bomb') {
    return 'You Win with Bomb!';
  }
};

function playGame() {
  var userChoice = getUserChoice('bomb');
  var computerChoice = getComputerChoice()
  console.log(`Your choice is ${userChoice}.`);
  console.log(`The computer choice is ${computerChoice}.`);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
