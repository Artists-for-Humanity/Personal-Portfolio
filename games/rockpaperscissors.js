/* var declar */
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const submit = document.getElementById('submit');
const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
const computer = document.querySelector('.computer');
const userText = document.getElementById('userText');
const htmlEndText = document.getElementsByClassName('endText');
const endText = Array.prototype.slice.call(htmlEndText);
const retryButton = document.getElementById('retryButton');

const settings = {
  userChoice: null,
  computerChoice: '',
};

/* function */

function getComputerChoice() {
  setTimeout(()=> {
    let computerChoice = Math.floor(Math.random()*9)+1;
    let spin = (computerChoice*40) + Math.floor(Math.random()*7+1)*360;
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
    let x = settings.userChoice.toUpperCase();
    userText.innerHTML = `${x}`;
    endText.forEach((x) => {
      x.style.display = 'block'
    });
    getComputerChoice();
    setTimeout(()=> {
      document.getElementById('computerText').innerHTML = settings.computerChoice.toUpperCase();
      document.getElementById('whoWon').innerHTML = determineWinner(settings.userChoice, settings.computerChoice);
      retryButton.style.display = 'block';
    }, 5000);
  } else {
    alert('Pick an option before submitting.')
  }
};

function playGame() {
  wheel.style.transform = `rotate(0deg)`;
  settings.userChoice = null;
  rock.className = 'option';
  paper.className = 'option';
  document.getElementById('computerText').innerHTML = '';
  document.getElementById('whoWon').innerHTML = '';
  scissors.className = 'option';
  settings.computerChoice = '';
  retryButton.style.display = 'none';
  rock.style.display = 'flex';
  paper.style.display = 'flex';
  scissors.style.display = 'flex';
  submit.style.display = 'flex';
  computer.style.display = 'none';
  wheel.style.display = 'none';
  spinBtn.style.display = 'none';
  endText.forEach((x) => {
    x.style.display = 'none'
  });
};


// event listeners
submit.addEventListener("click", endGame);

rock.onclick = function() {
  settings.userChoice = 'rock';
  rock.className = 'option optionActive active';
  paper.className = 'option optionActive';
  scissors.className = 'option optionActive';
};

paper.onclick = function() {
  settings.userChoice = 'paper';
  rock.className = 'option optionActive';
  paper.className = 'option optionActive active';
  scissors.className = 'option optionActive';
};

scissors.onclick = function() {
  settings.userChoice = 'scissors';
  rock.className = 'option optionActive';
  paper.className = 'option optionActive';
  scissors.className = 'option optionActive active';
};

retryButton.addEventListener("click", playGame);