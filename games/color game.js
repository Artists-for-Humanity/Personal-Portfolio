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
const lightMode = document.getElementById('lightMode');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const themeContainer = document.getElementById('themeContainer');
const themeLabel = document.getElementById('themeLabel');
const easyText = document.getElementById('easyText');
const mediumText = document.getElementById('mediumText');
const hardText = document.getElementById('hardText');
const difficultyButton = document.getElementById('difficultyButton');
const html = document.querySelector('html');
const timerDisplay = document.getElementById('timerDisplay');
const timerHour = document.getElementById('timerHour');
const timerMinute = document.getElementById('timerMinute');
const timerSecond = document.getElementById('timerSecond');
const timerMillisecond = document.getElementById('timerMillisecond');
const easyHighText = document.getElementById('easyHighText');
const mediumHighText = document.getElementById('mediumHighText');
const hardHighText = document.getElementById('hardHighText');
const currentMode = document.getElementById('currentMode');

/* mobile devices */
if (window.innerHeight > window.innerWidth) {
    let removedTimerDisplay = timerDisplay.parentNode.removeChild(timerDisplay);
    document.getElementById('mobileTimer').appendChild(removedTimerDisplay);
};  


/*data objects*/
const gameValues = {
    red: 127,
    green: 127,
    blue: 127
};

const rightValues = {
    red: 0,
    green: 0,
    blue: 0
};

const settings = {
    difficulty: 2, //1 = easy, 2 = medium, 3 = hard (default on medium)
    mode: '', //light vs dark mode
    timer: false, //false = timer is off, true= timer is on
    count: 0,
    hour: 0,
    second: 0,
    minute: 0,
    totalScore: 0,
    easyHigh: 0,
    mediumHigh: 0,
    hardHigh: 0,
    easyPlayed: false,
    mediumPlayed: false,
    hardPlayed: false,
};



/* function declarations */
function endGame() {
    settings.timer = false;
    userColor.innerHTML = `rgb(${gameValues.red}, ${gameValues.green}, ${gameValues.blue})`;
    docColor.innerHTML = `rgb(${rightValues.red}, ${rightValues.green}, ${rightValues.blue})`;
    if (window.innerHeight < window.innerWidth) {
        docColor.style.transform = 'translateY(-10%)';
        userColor.style.transform = 'translateX(-50%)';
    } else {
        docColor.style.transform = 'translateY(-15%)';
        userColor.style.transform = 'translateX(-20%)';
    }
    submitButton.style.display = 'none';
    submitButton.removeEventListener('click', endGame);
    let percentOff = Math.floor((((1-(Math.abs(gameValues.red - rightValues.red)/255))*100)+((1-(Math.abs(gameValues.green - rightValues.green)/255))*100)+((1-(Math.abs(gameValues.blue - rightValues.blue)/255))*100))/3);
    retryButton.style.display = 'inline';
    retryButton.addEventListener('click', startGame);
    difficultyButton.style.display = 'inline';
    difficultyButton.addEventListener('click', changeDifficulty);
    settings.totalScore = ((settings.hour)*3600)+((settings.minute)*60)+(settings.second)+((settings.count)/100);
    if (settings.difficulty === 1) {
        mediumHighText.style.display = 'none';
        hardHighText.style.display = 'none';
        easyHighText.style.display = 'inline';
        if (percentOff >= 90) {
            retryButton.innerHTML = `YOU <strong>WIN</strong>! You were ${percentOff}% correct. <br> Click this button to try again?`;
            if (settings.easyPlayed === false) {
                settings.easyHigh = settings.totalScore;
                easyHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                settings.easyPlayed = true;
            } else {
                if (settings.totalScore < settings.easyHigh) {
                    easyHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                    settings.easyHigh = settings.totalScore;
                }
            }
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. <br> Click this button to try again?`;
        }
    } else if (settings.difficulty === 2) {
        mediumHighText.style.display = 'inline';
        hardHighText.style.display = 'none';
        easyHighText.style.display = 'none';
        if (percentOff >= 95) {
            retryButton.innerHTML = `YOU <strong>WIN</strong>! You were ${percentOff}% correct. <br> Click this button to try again?`;
            if (settings.mediumPlayed === false) {
                settings.mediumHigh = settings.totalScore;
                mediumHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                settings.mediumPlayed = true;
            } else {
                if (settings.totalScore < settings.mediumHigh) {
                    mediumHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                    settings.mediumHigh = settings.totalScore;
                }
            }
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. <br> Click this button to try again?`;
        }
    } else {
        mediumHighText.style.display = 'none';
        hardHighText.style.display = 'inline';
        easyHighText.style.display = 'none';
        if (percentOff >= 99) {
            retryButton.innerHTML = 'YOU <strong>WIN</strong>! You were 100% correct! Impressive. <br> Click this button to try again?';
            if (settings.hardPlayed === false) {
                settings.hardHigh = settings.totalScore;
                hardHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                settings.hardPlayed = true;
            } else {
                if (settings.totalScore < settings.hardHigh) {
                    hardHighText.innerHTML = `${settings.hour}:${settings.minute}:${settings.second}:${settings.count}`;
                    settings.hardPlayed = true;
                }
            }
        } else {
            retryButton.innerHTML = `You <strong>LOSE</strong>, but you were ${percentOff}% correct. <br> Click this button to try again?`;
        }
    }
};

function startGame() {
    userColor.style.transform = 'translateX(0%)';
    docColor.style.transform = 'translateY(0%)';
    timerHour.innerHTML = '00';
    timerMinute.innerHTML = '00';
    timerSecond.innerHTML = '00';
    timerMillisecond.innerHTML = '00';
    settings.hour = 0;
    settings.count = 0;
    settings.minute = 0;
    settings.second = 0;
    settings.timer = true;
    easyText.style.display = 'none';
    mediumText.style.display = 'none';
    hardText.style.display = 'none';
    userColor.style.backgroundColor = 'rgb(127, 127, 127)';
    if (settings.difficulty === 1) {
        redVal.step ='15';
        greenVal.step = '15';
        blueVal.step = '15';
        easyText.style.display =  'inline';
        currentMode.innerHTML = 'Easy ';
        mediumHighText.style.display = 'none';
        hardHighText.style.display = 'none';
        easyHighText.style.display = 'inline';
    } else if (settings.difficulty === 2) {
        mediumText.style.display =  'inline';
        redVal.step ='1';
        greenVal.step = '1';
        blueVal.step = '1';
        currentMode.innerHTML = 'Medium ';
        mediumHighText.style.display = 'inline';
        hardHighText.style.display = 'none';
        easyHighText.style.display = 'none';
    } else {
        hardText.style.display =  'inline';
        currentMode.innerHTML = 'Hard ';
        mediumHighText.style.display = 'none';
        hardHighText.style.display = 'inline';
        easyHighText.style.display = 'none';
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
    timerDisplay.style.display = 'inline';
    redVal.style.display = 'inline';
    redVal.value = '127';
    blueVal.value = '127';
    greenVal.value= '127';
    gameValues.red = 127;
    gameValues.blue = 127;
    gameValues.green = 127;
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
    timer();
};
function timer() {
        if (settings.timer) {
            settings.count++;
            if (settings.count === 100) {
                settings.second++;
                settings.count = 0;
            }
            if (settings.second === 60) {
                settings.minute++;
                settings.second = 0;
            }
            if (settings.minute === 60) {
                settings.hour++;
                settings.minute = 0;
                settings.second = 0;
            }
            let hrString = settings.hour;
            let minString = settings.minute;
            let secString = settings.second;
            let countString = settings.count;
            if (settings.hour < 10) {
                hrString = "0" + hrString;
            }
            if (settings.minute < 10) {
                minString = "0" + minString;
            }
            if (settings.second < 10) {
                secString = "0" + secString;
            }
            if (settings.count < 10) {
                countString = "0" + countString;
            }
            timerHour.innerHTML = hrString;
            timerMinute.innerHTML = minString;
            timerSecond.innerHTML = secString;
            timerMillisecond.innerHTML = countString;
            setTimeout(timer, 7);
        }
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
    timerDisplay.style.display = 'none';
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
        html.style.background = 'white';
        userColor.style.border = '1px solid black';
        docColor.style.border = '1px solid black';
        timerDisplay.style.border = '1px solid black';
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
        html.style.background = 'black';
        userColor.style.border = '1px solid white';
        docColor.style.border = '1px solid white';
        timerDisplay.style.border = '1px solid white';
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