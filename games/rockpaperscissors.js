function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    switch (random) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    };
  };
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Game is a tie.';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
          return 'User won.';
        } else {
          return 'Computer won.';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
          return 'User won.';
        } else {
          return 'Computer won.';
        }
    } else {
      if (computerChoice === 'paper') {
        return 'User won.';
      } else {
        return 'Computer won.';
      }
    }
  };
  
  function playGame(userChoice) { 
    userChoice = userChoice.toLowerCase();
    if (userChoice === 'bomb') {
        return ('User won.');
    } else {
      if (userChoice === 'rock' || userChoice == 'scissors' || userChoice === 'paper') {
        computerChoice = getComputerChoice();
        console.log (`User chose: ${userChoice}.`);
        console.log (`Computer chose: ${computerChoice}.`);
        return determineWinner(userChoice, computerChoice);
      } else {
        return ('Error, user input not recognized.');
      }
    }
  };
  
  console.log(playGame(''));