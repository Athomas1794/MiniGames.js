const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  //validate user input
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('Not a valid input')
  }
};

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      return undefined;
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'tie';
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'human wins';
    }
    else{
      return 'computer wins';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'human wins';
    }
    else{
      return 'computer wins';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'human wins';
    }
    else{
      return 'computer wins';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();
  console.log(userChoice + ' vs ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
