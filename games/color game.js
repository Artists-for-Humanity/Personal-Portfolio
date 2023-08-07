/* variable declarations*/
const startButton = document.getElementById('startButton');
const docColor = document.getElementById('docColor');
const userColor = document.getElementById('userColor');
const submitButton = document.getElementById('submitButton');
const redVal = document.getElementById('red');
const greenVal = document.getElementById('green');
const blueVal = document.getElementById('blue');
const retryButton = document.getElementById('retryButton');
const easyButton = document.getElementById('easyButton');
const mediumButton = document.getElementById('mediumButton');
const hardButton = document.getElementById('hardButton');
const body = document.querySelector('body');
const darkMode = document.getElementById('darkMode');
const lightMode = document.getElementById('lightMode')
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const themeContainer = document.getElementById('themeContainer');
const themeLabel = document.getElementById('themeLabel');
const easyText = document.getElementById('easyText');
const mediumText = document.getElementById('mediumText');
const hardText = document.getElementById('hardText');
const difficultyButton = document.getElementById('difficultyButton');
const footer = document.getElementById('footer');
footer.style.backgroundColor = 'black';



/*data objects*/
const gameValues = {
    red: 0,
    green: 0,
    blue: 0
};

const rightValues = {
    red: 0,
    green: 0,
    blue: 0
};

const settings = {
    difficulty: 2, //1 = easy, 2 = medium, 3 = hard (default on medium)
    mode: '' //light vs dark mode
};



/* function declarations */
function endGame() {
    userColor.innerHTML = `rgb(${gameValues.red}, ${gameValues.green}, ${gameValues.blue})`;
    docColor.innerHTML = `rgb(${rightValues.red}, ${rightValues.green}, ${rightValues.blue})`;
    submitButton.style.display = 'none';
    submitButton.removeEventListener('click', endGame);
    let percentOff = Math.floor((((1-(Math.abs(gameValues.red - rightValues.red)/255))*100)+((1-(Math.abs(gameValues.green - rightValues.green)/255))*100)+((1-(Math.abs(gameValues.blue - rightValues.blue)/255))*100))/3);
    retryButton.style.display = 'inline';
    retryButton.addEventListener('click', startGame);
    difficultyButton.style.display = 'inline';
    difficultyButton.addEventListener('click', changeDifficulty);
    if (settings.difficulty === 1) {
        if (percentOff >= 90) {
            retryButton.innerHTML = `YOU <strong>WIN</strong>! You were ${percentOff}% correct. Click this button to try again?`;
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. Click this button to try again?`;
        }
    } else if (settings.difficulty === 2) {
        if (percentOff >= 95) {
            retryButton.innerHTML = `YOU <strong>WIN</strong>! You were ${percentOff}% correct. Click this button to try again?`;
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. Click this button to try again?`;
        }
    } else {
        if (gameValues.red === rightValues.red && gameValues.blue === rightValues.blue && gameValues.green === rightValues.green) {
            retryButton.innerHTML = 'YOU <strong>WIN</strong>! You were 100% correct! Impressive. Click this button to try again?';
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. Click this button to try again?`;
        }
    }
};

function startGame() {
    easyText.style.display = 'none';
    mediumText.style.display = 'none';
    hardText.style.display = 'none';
    if (settings.difficulty === 1) {
        redVal.step ='15';
        greenVal.step = '15';
        blueVal.step = '15';
        easyText.style.display =  'inline';
    } else if (settings.difficulty === 2) {
        mediumText.style.display =  'inline';
        redVal.step ='1';
        greenVal.step = '1';
        blueVal.step = '1';
    } else {
        hardText.style.display =  'inline';
        redVal.step ='1';
        greenVal.step = '1';
        blueVal.step = '1';
    }
    randomColor();
    userColor.innerHTML = '';
    docColor.innerHTML = 'MATCH THIS COLOR!';
    startButton.style.display = 'none';
    docColor.style.display = 'inline';
    userColor.style.display = 'inline';
    redVal.style.display = 'inline';
    submitButton.style.display = 'inline';
    greenVal.style.display = 'inline';
    blueVal.style.display = 'inline';
    submitButton.innerHTML = 'SUBMIT!';
    submitButton.style.display = 'inline';
    submitButton.addEventListener('click', endGame);
    retryButton.style.display = 'none';
    easyButton.style.display = 'none';
    mediumButton.style.display = 'none';
    hardButton.style.display = 'none';
    difficultyButton.style.display = 'none';
};

function randomColor() {
    if (settings.difficulty === 1) {
        rightValues.red = (Math.floor(Math.random() * 18))*15;
        rightValues.green = (Math.floor(Math.random() * 18))*15;
        rightValues.blue = (Math.floor(Math.random() * 18))*15;
    } else {
        rightValues.red = Math.floor(Math.random() * 256);
        rightValues.green = Math.floor(Math.random() * 256);
        rightValues.blue = Math.floor(Math.random() * 256);
    }
    docColor.style.backgroundColor = `rgb(${rightValues.red}, ${rightValues.green}, ${rightValues.blue})`;
};

function changeDifficulty() {
    difficultyButton.style.display = 'none';
    difficultyButton.removeEventListener ('click', changeDifficulty);
    easyText.style.display = 'inline';
    mediumText.style.display = 'inline';
    hardText.style.display = 'inline';
    startButton.style.display = 'inline';
    docColor.style.display = 'none';
    userColor.style.display = 'none';
    redVal.style.display = 'none';
    submitButton.style.display = 'none';
    greenVal.style.display = 'none';
    blueVal.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'none';
    easyButton.style.display = 'inline';
    mediumButton.style.display = 'inline';
    hardButton.style.display = 'inline';
}

function theme() {
    if (settings.mode === 'light') {
        body.style.background = 'white';
        h1.style.color = 'black';
        h2.style.color = 'black';
        themeContainer.style.color = 'black';
        themeLabel.style.color = 'black';
        easyButton.style.backgroundColor = 'black';
        easyButton.style.color = 'white';
        easyButton.style.border = '1px solid white';
        mediumButton.style.backgroundColor = 'black';
        mediumButton.style.color = 'white';
        mediumButton.style.border = '1px solid white';
        hardButton.style.backgroundColor = 'black';
        hardButton.style.color = 'white';
        hardButton.style.border = '1px solid white';
        startButton.style.backgroundColor = 'black';
        startButton.style.color = 'white';
        startButton.style.border = '1px solid white';
        retryButton.style.backgroundColor = 'white';
        retryButton.style.color = 'black';
        retryButton.style.border = '1px solid black';
        difficultyButton.style.backgroundColor = 'white';
        difficultyButton.style.color = 'black';
        difficultyButton.style.border = '1px solid black';
        submitButton.style.backgroundColor = 'white';
        submitButton.style.color = 'black';
        submitButton.style.border = '1px solid black';
        redVal.style.border = '2px solid black';
        greenVal.style.border = '2px solid black';
        blueVal.style.border = '2px solid black';
        footer.style.backgroundColor = 'white';
    } else {
        body.style.background = 'black';
        h1.style.color = 'white';
        h2.style.color = 'white';
        themeContainer.style.color = 'white';
        themeLabel.style.color = 'white';
        easyButton.style.backgroundColor = 'white';
        easyButton.style.color = 'black';
        easyButton.style.border = '1px solid black';
        mediumButton.style.backgroundColor = 'white';
        mediumButton.style.color = 'black';
        mediumButton.style.border = '1px solid black';
        hardButton.style.backgroundColor = 'white';
        hardButton.style.color = 'black';
        hardButton.style.border = '1px solid black';
        startButton.style.backgroundColor = 'white';
        startButton.style.color = 'black';
        startButton.style.border = '1px solid black';
        retryButton.style.backgroundColor = 'black';
        retryButton.style.color = 'white';
        retryButton.style.border = '1px solid white';
        difficultyButton.style.backgroundColor = 'black';
        difficultyButton.style.color = 'white';
        difficultyButton.style.border = '1px solid white';
        submitButton.style.backgroundColor = 'black';
        submitButton.style.color = 'white';
        submitButton.style.border = '1px solid white';
        redVal.style.border = '2px solid white';
        greenVal.style.border = '2px solid white';
        blueVal.style.border = '2px solid white';
        footer.style.backgroundColor = 'black';
    }
};



/* event listeners*/
redVal.oninput = function() {
    gameValues.red = this.value;
    userColor.style.backgroundColor = `rgb(${gameValues.red}, ${gameValues.green}, ${gameValues.blue})`;
};

greenVal.oninput = function() {
    gameValues.green = this.value;
    userColor.style.backgroundColor = `rgb(${gameValues.red}, ${gameValues.green}, ${gameValues.blue})`;
};

blueVal.oninput = function() {
    gameValues.blue = this.value;
    userColor.style.backgroundColor = `rgb(${gameValues.red}, ${gameValues.green}, ${gameValues.blue})`;
};

darkMode.oninput = function() {
    settings.mode = 'dark';
    theme();
};

lightMode.oninput = function() {
    settings.mode = 'light';
    theme();
};

startButton.onclick = startGame;

easyButton.onclick = function() {
    startButton.style.display = 'inline';
    easyButton.style.opacity = 1;
    mediumButton.style.opacity = 0.5;
    hardButton.style.opacity = 0.5;
    settings.difficulty = 1;
    easyButton.style.textDecoration = 'underline';
    mediumButton.style.textDecoration = 'none';
    hardButton.style.textDecoration = 'none';
};

mediumButton.onclick = function() {
    startButton.style.display = 'inline';
    easyButton.style.opacity = 0.5;
    mediumButton.style.opacity = 1;
    hardButton.style.opacity = 0.5;
    settings.difficulty = 2;
    easyButton.style.textDecoration = 'none';
    mediumButton.style.textDecoration = 'underline';
    hardButton.style.textDecoration = 'none';
};

hardButton.onclick = function() {
    startButton.style.display = 'inline';
    easyButton.style.opacity = 0.5;
    mediumButton.style.opacity = 0.5;
    hardButton.style.opacity = 1;
    settings.difficulty = 3;
    easyButton.style.textDecoration = 'none';
    mediumButton.style.textDecoration = 'none';
    hardButton.style.textDecoration = 'underline';
};