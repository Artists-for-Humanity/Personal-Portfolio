/* var declar */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const submit = document.getElementById('submit');
const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const computer = document.querySelector('.computer');

const settings = {
  mode: 'darkMode',
  userChoice: null,
  computerChoice: '',
};

/* function */

function getComputerChoice() {
  setTimeout(()=> {
    let computerChoice = Math.floor(Math.random()*9)+1;
    let spin = (computerChoice*40) + 1800;
    wheel.style.transform = `rotate(${spin}deg)`;
    switch (computerChoice) {
      case 1:
        settings.computerChoice = 'scissors';
        break;
      case 2:
        settings.computerChoice = 'paper';
        break;
      case 3:
        settings.computerChoice = 'rock';
        break;
      case 4:
        settings.computerChoice = 'scissors';
        break;
      case 5:
        settings.computerChoice = 'paper';
        break;
      case 6:
        settings.computerChoice = 'rock';
        break;
      case 7:
        settings.computerChoice = 'scissors';
        break;
      case 8:
        settings.computerChoice = 'paper';
        break;
      case 9:
        settings.computerChoice = 'rock';
        break;
    };
  }, 0.001);
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

function endGame() { 
  if (settings.userChoice) {
    computer.style.display = 'flex';
    wheel.style.display = 'block';
    spinBtn.style.display = 'block';
    rock.style.display = 'none';
    submit.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    getComputerChoice();
    setTimeout(()=> {
      console.log(settings.userChoice);
      console.log(determineWinner(settings.userChoice, settings.computerChoice));
    }, 5000);
  } else {
    alert('Pick an option before submitting.')
  }
};

function playGame() {
  rock.style.display = 'block';
  paper.style.display = 'block';
  scissors.style.display = 'block';
  submit.style.display = 'block';
  computer.style.display = 'none';
  wheel.style.display = 'none';
  spinBtn.style.display = 'none';
};


// event listeners
submit.addEventListener("click", endGame);

rock.onclick = function() {
  settings.userChoice = 'rock';
  rock.className = 'option active';
  paper.className = 'option';
  scissors.className = 'option';
};

paper.onclick = function() {
  settings.userChoice = 'paper';
  rock.className = 'option';
  paper.className = 'option active';
  scissors.className = 'option';
};

scissors.onclick = function() {
  settings.userChoice = 'scissors';
  rock.className = 'option';
  paper.className = 'option';
  scissors.className = 'option active';
};