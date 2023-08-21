/* variable declarations */
const startButton = document.getElementById('startButton');
const computerButton = document.getElementById('computerButton');
const pvpButton = document.getElementById('pvpButton');
const retryButton = document.getElementById('retryButton');
const table = document.querySelector('table');
const tileOne = document.getElementById('tileOne');
const tileTwo = document.getElementById('tileTwo');
const tileThree = document.getElementById('tileThree');
const tileFour = document.getElementById('tileFour');
const tileFive = document.getElementById('tileFive');
const tileSix = document.getElementById('tileSix');
const tileSeven = document.getElementById('tileSeven');
const tileEight = document.getElementById('tileEight');
const tileNine = document.getElementById('tileNine');
const computerText = document.getElementById('computerText');
const winText = document.getElementById('winText');
const htmlTiles = document.getElementsByClassName('tile');
const tiles = Array.prototype.slice.call(htmlTiles);
const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode');
const html = document.querySelector('html');
const h1 = document.querySelector('h1');
const computerIcon = document.getElementById('computerIcon');
html.style.background = 'black';



/* mobile devices */
if (window.innerHeight > window.innerWidth) {
    let removedComputerText = computerText.parentNode.removeChild(computerText);
    let removedComputerIcon = computerIcon.parentNode.removeChild(computerIcon);
    let removedWinText = winText.parentNode.removeChild(winText);

    document.getElementById('mobileComputer').appendChild(removedWinText);
    document.getElementById('mobileComputer').appendChild(removedComputerIcon);
    document.getElementById('mobileComputer').appendChild(removedComputerText);

};  



/* data objects */
const settings = {
    mode: '',
    tileOne: false,
    tileTwo: false,
    tileThree: false,
    tileFour: false,
    tileFive: false,
    tileSix: false,
    tileSeven: false,
    tileEight: false,
    tileNine: false,
    winner: '',
    gameOver: false,
    theme: ''
};

const currentEvent = {
    tile: ''
};

const quotes = [
    "Better by far you should forget and smile...Than that you should remember and be sad.",
    "Do not stand at my grave and cry; I am not there. I did not die.",
    "Don't hate the player, hate the game.",
    "I feel within me a peace above all earthly dignities, a still and quiet conscience.",
    "In the end… We only regret the chances we didn't take.",
    "LIFE is a mosaic of pleasure and pain.",
    "Of all sad words of tongue or pen, the saddest are these, 'It might have been.'",
    "Our doubts are traitors, and make us lose the good we oft might win, by fearing to attempt.",
    "She smiled in defeat, With unconquerable eyes.",
    "The pain I feel now is the happiness I had before. That's the deal.",
    "There are no regrets in life, just lessons.",
    "The soul would have no rainbow, Had the eyes no tears.",
    "This thing we call 'failure' is not the falling down, but the staying down.",
    "To live is to suffer, to survive is to find some meaning in the suffering.",
    "Whenever I play I am followed by a dog called 'Ego'.",
    "Your failure here is a metaphor. To learn for what, please resume playing.",
    "If you want to go far go alone. If you want to go fast, go with friends.",
    "Stop drifting… sprint to the finish. Write off your hopes, be your own savior while you can.",
    "Choose old people for enemies. They die. You win.",
    "No matter how hot your anger may be, it cannot cook.",
    "A goat's frown cannot stop it from being taken to the market.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "The more you know, the more you know you don't know.",
    "Life is really simple, but we insist on making it complicated.",
    "Love is a serious mental disease."
];


/* function declarations */
function startGame() {
    computerIcon.style.display = 'block';
    winText.innerHTML = '';
    computerText.innerHTML = '';
    tiles.forEach((x) => {
        x.innerHTML = '';
        x.addEventListener('click', tileClick);
    })
    computerButton.style.display = 'none';
    startButton.style.display = 'none';
    pvpButton.style.display = 'none';
    table.style.display = 'inline';
    retryButton.style.display = 'none';
    settings.tileOne = false;
    settings.tileTwo = false;
    settings.tileThree = false;
    settings.tileFour = false;
    settings.tileFive = false;
    settings.tileSix = false;
    settings.tileSeven = false;
    settings.tileEight = false;
    settings.tileNine = false;
    settings.winner = '';
    settings.gameOver = false;
};

function tileClick(event) {
    if (event.target.classList.contains('tileOne')) {
        currentEvent.tile = 'tileOne';
    } else if (event.target.classList.contains('tileTwo')) {
        currentEvent.tile = 'tileTwo';
    } else if (event.target.classList.contains('tileThree')) {
        currentEvent.tile = 'tileThree';
    } else if (event.target.classList.contains('tileFour')) {
        currentEvent.tile = 'tileFour';
    } else if (event.target.classList.contains('tileFive')) {
        currentEvent.tile = 'tileFive';
    } else if (event.target.classList.contains('tileSix')) {
        currentEvent.tile = 'tileSix';
    } else if (event.target.classList.contains('tileSeven')) {
        currentEvent.tile = 'tileSeven';
    } else if (event.target.classList.contains('tileEight')) {
        currentEvent.tile = 'tileEight';
    } else if (event.target.classList.contains('tileNine')) {
        currentEvent.tile = 'tileNine';
    };
    if (settings[currentEvent.tile] === false) {
        tiles.forEach((x) => {
            x.removeEventListener('click', tileClick);
        })
        if (event.target.classList.contains('tileOne')) {
            tileOne.style.color = 'blue';
            tileOne.innerHTML = 'X';
            settings.tileOne = true;
        } else if (event.target.classList.contains('tileTwo')) {
            tileTwo.style.color = 'blue';
            tileTwo.innerHTML = 'X';
            settings.tileTwo = true;
        } else if (event.target.classList.contains('tileThree')) {
            tileThree.style.color = 'blue';
            tileThree.innerHTML = 'X';
            settings.tileThree = true;
        } else if (event.target.classList.contains('tileFour')) {
            tileFour.style.color = 'blue';
            tileFour.innerHTML = 'X';
            settings.tileFour = true;
        } else if (event.target.classList.contains('tileFive')) {
            tileFive.style.color = 'blue';
            tileFive.innerHTML = 'X';
            settings.tileFive = true;
        } else if (event.target.classList.contains('tileSix')) {
            tileSix.style.color = 'blue';
            tileSix.innerHTML = 'X';
            settings.tileSix = true;
        } else if (event.target.classList.contains('tileSeven')) {
            tileSeven.style.color = 'blue';
            tileSeven.innerHTML = 'X';
            settings.tileSeven = true;
        } else if (event.target.classList.contains('tileEight')) {
            tileEight.style.color = 'blue';
            tileEight.innerHTML = 'X';
            settings.tileEight = true;
        } else if (event.target.classList.contains('tileNine')) {
            tileNine.style.color = 'blue';
            tileNine.innerHTML = 'X';
            settings.tileNine = true;
        };
        isGameOver();
        setTimeout(() => {
            computerTurn();
        }, "3000");
        computerText.classList.toggle('animation');
        let computerChoice = Math.floor(Math.random()*25);
        computerText.innerHTML = 'KawaiiBot: <br>' + quotes[computerChoice];
    } else {
    };
};

function computerTurn() {
    if (settings.gameOver === true) {
    } else {
        let computer = {
            choice: ''
        };
        do {
            let randomNumber = Math.floor(Math.random()*9+1)
            switch (randomNumber) {
                case 1:
                    computer.choice = 'tileOne';
                    break;
                case 2:
                    computer.choice = 'tileTwo';
                    break;
                case 3:
                    computer.choice = 'tileThree';
                    break;
                case 4:
                    computer.choice = 'tileFour';
                    break;
                case 5:
                    computer.choice = 'tileFive';
                    break;
                case 6:
                    computer.choice = 'tileSix';
                    break;
                case 7:
                    computer.choice = 'tileSeven';
                    break;
                case 8:
                    computer.choice = 'tileEight';
                    break;
                case 9:
                    computer.choice = 'tileNine';
                    break;
            }
        } while (settings[computer.choice] === true);
        switch (computer.choice) {
            case 'tileOne':
                tileOne.style.color = 'red';
                tileOne.innerHTML = 'O';
                settings.tileOne = true;
                break;
            case 'tileTwo':
                tileTwo.style.color = 'red';
                tileTwo.innerHTML = 'O';
                settings.tileTwo = true;
                break;
            case 'tileThree':
                tileThree.style.color = 'red';
                tileThree.innerHTML = 'O';
                settings.tileThree = true;
                break;
            case 'tileFour':
                tileFour.style.color = 'red';
                tileFour.innerHTML = 'O';
                settings.tileFour = true;
                break;
            case 'tileFive':
                tileFive.style.color = 'red';
                tileFive.innerHTML = 'O';
                settings.tileFive = true;
                break;
            case 'tileSix':
                tileSix.style.color = 'red';
                tileSix.innerHTML = 'O';
                settings.tileSix = true;
                break;
            case 'tileSeven':
                tileSeven.style.color = 'red';
                tileSeven.innerHTML = 'O';
                settings.tileSeven = true;
                break;
            case 'tileEight':
                tileEight.style.color = 'red';
                tileEight.innerHTML = 'O';
                settings.tileEight = true;
                break;
            case 'tileNine':
                tileNine.style.color = 'red';
                tileNine.innerHTML = 'O';
                settings.tileNine = true;
                break;
        }
        tiles.forEach((x) => {
            x.addEventListener('click', tileClick);
        })
        isGameOver();
    };
    computerText.classList.toggle('animation');
}

function isGameOver() {
    if (tileOne.innerHTML === 'X' && tileTwo.innerHTML === 'X' && tileThree.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileFour.innerHTML === 'X' && tileFive.innerHTML === 'X' && tileSix.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileSeven.innerHTML === 'X' && tileEight.innerHTML === 'X' && tileNine.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileTwo.innerHTML === 'X' && tileFive.innerHTML === 'X' && tileEight.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileOne.innerHTML === 'X' && tileFive.innerHTML === 'X' && tileNine.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileThree.innerHTML === 'X' && tileFive.innerHTML === 'X' && tileSeven.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileOne.innerHTML === 'X' && tileFour.innerHTML === 'X' && tileSeven.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileThree.innerHTML === 'X' && tileSix.innerHTML === 'X' && tileNine.innerHTML === 'X') {
        settings.winner = 'playerOne';
        gameOver();
    } else if (tileOne.innerHTML === 'O' && tileTwo.innerHTML === 'O' && tileThree.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileFour.innerHTML === 'O' && tileFive.innerHTML === 'O' && tileSix.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileSeven.innerHTML === 'O' && tileEight.innerHTML === 'O' && tileNine.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileTwo.innerHTML === 'O' && tileFive.innerHTML === 'O' && tileEight.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileOne.innerHTML === 'O' && tileFive.innerHTML === 'O' && tileNine.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileThree.innerHTML === 'O' && tileFive.innerHTML === 'O' && tileSeven.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileOne.innerHTML === 'O' && tileFour.innerHTML === 'O' && tileSeven.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileThree.innerHTML === 'O' && tileSix.innerHTML === 'O' && tileNine.innerHTML === 'O') {
        settings.winner = 'computer';
        gameOver();
    } else if (tileOne.innerHTML && tileTwo.innerHTML && tileThree.innerHTML  && tileFour.innerHTML && tileFive.innerHTML && tileSix.innerHTML && tileSeven.innerHTML && tileEight.innerHTML && tileNine.innerHTML) {
        settings.winner = 'draw';
        gameOver();
    };
};

function gameOver() {
    settings.gameOver = true;
    tiles.forEach((x) => {
        x.removeEventListener('click', tileClick);
    })
    if (settings.winner === 'playerOne') {
        winText.innerHTML = "You've won!"
    } else if (settings.winner === 'computer') {
        winText.innerHTML = "How'd you lose to a computer?";
    } else {
        winText.innerHTML = "It's a draw.";
    };
    setTimeout(() => {
        retryButton.style.display = 'inline';
    }, "3000");
};


function theme() {
    if (settings.theme === 'light') {
        html.style.background = 'white';
        h1.style.color = 'black';
        themeContainer.style.color = 'black';
        themeLabel.style.color = 'black';
        startButton.style.backgroundColor = 'black';
        startButton.style.color = 'white';
        startButton.style.border = '1px solid white';
        retryButton.style.backgroundColor = 'white';
        retryButton.style.color = 'black';
        retryButton.style.border = '1px solid black';
        computerText.style.color = 'black';
        winText.style.color  = 'black';
    } else {
        html.style.background = 'black';
        h1.style.color = 'white';
        themeContainer.style.color = 'white';
        themeLabel.style.color = 'white';
        startButton.style.backgroundColor = 'white';
        startButton.style.color = 'black';
        startButton.style.border = '1px solid black';
        retryButton.style.backgroundColor = 'black';
        retryButton.style.color = 'white';
        retryButton.style.border = '1px solid white';
        computerText.style.color = 'white';
        winText.style.color = 'white';
    }
};



/* event listeners */
computerButton.onclick = function() {
    startButton.style.display = 'inline';
    pvpButton.style.opacity = 0.5;
    computerButton.style.opacity = 1;
    settings.mode = 'computer';
    pvpButton.style.textDecoration = 'none';
    computerButton.style.textDecoration = 'underline';
};

pvpButton.onclick = function() {
    startButton.style.display = 'inline';
    pvpButton.style.opacity = 1;
    computerButton.style.opacity = 0.5;
    settings.mode = 'pvp';
    computerButton.style.textDecoration = 'none';
    pvpButton.style.textDecoration = 'underline';
};

startButton.onclick = startGame;
retryButton.onclick = startGame;

darkMode.oninput = function() {
    settings.theme = 'dark';
    theme();
};

lightMode.oninput = function() {
    settings.theme = 'light';
    theme();
};