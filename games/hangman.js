const htmlTiles = document.getElementsByClassName('tile');
const tiles = Array.prototype.slice.call(htmlTiles);
const playButton = document.getElementById('playButton');
const hangmanContainer = document.querySelector('.hangmanContainer');
const wordContainer = document.querySelector(".wordContainer");
const hangmanDiv = document.querySelector(".ascii-art");
const endText = document.getElementById('endText');
const retryButton = document.getElementById('retryButton');
const definitionDisplay = document.getElementById('definitionDisplay');

const settings = {
    word: '',
    streak: 0,
    highscore: 0,
    wrongCounter: 0,
    win: null,
    wordArray: '',
    string: [],
    correctWords: []
};

const hangmanAsciiArt = [
    "",
    "  +---+",
    "  |   |",
    "  O   |",
    " /|\\  |",
    " / \\  |",
    "      |",
    "========",
    " /    |",
    " /|   |",
    " /    |",
];

function updateAsciiArt() {
    if (settings.wrongCounter === 0) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    } else if (settings.wrongCounter === 1) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    } else if (settings.wrongCounter === 2) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[8] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    } else if (settings.wrongCounter === 3) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[9] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    } else if (settings.wrongCounter === 4) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[4] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    } else if (settings.wrongCounter === 5) {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[4] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[10] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
    }
}


function playGame() {
    document.getElementById('correctWordsDisplay').style.display = 'flex';
    if (settings.streak === 0) {
        settings.correctWords = [];
        document.getElementById('correctWords').innerHTML = "";
    }
    settings.string = [];
    settings.wordArray = '';
    definitionDisplay.style.display = 'none';
    endText.style.display = 'none';
    retryButton.style.display = 'none';
    settings.win = null;
    settings.wrongCounter = 0;
    settings.word = '';
    playButton.style.display = 'none';
    updateAsciiArt();

    tiles.forEach((x) => {
        x.className = 'tile';
    });

    const url = 'https://random-word-api.vercel.app/api?words=1';
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let word = data[0];
        settings.word = word;
        getWord();
        tiles.forEach((x) => {
            x.addEventListener("click", tileClicked);
        })
        
        window.addEventListener("keydown", keyPressed);
    })
    .catch(() => {
        throw new Error('Something went wrong while fetching API.');
    });

}

function getWord() {
    hangmanContainer.style.display = 'flex';
    tiles.forEach((x) => {
        x.style.display = 'inline-block';
    });
    for (let i = 0; i < settings.word.length; i += 1) {
        settings.string.push('_');
    };
    wordContainer.innerHTML = settings.string.join(" "); 
    settings.wordArray = settings.word.split("");
};

function keyPressed(event) {
try {
    let key = event.key.toString();
    if (settings.word.includes(key)) {
        document.getElementById(key).className = 'tile pressedRight';
        for (let i = 0; i < settings.word.length; i += 1) {
            if (settings.wordArray[i] === key) {
            settings.string[i] = key;
            wordContainer.innerHTML = settings.string.join(" "); 
            }
        };
    } else if (document.getElementById(key).classList.contains('pressedRight') || document.getElementById(key).classList.contains('pressedWrong')) {
    } else {
        document.getElementById(key).className = 'tile pressedWrong';
        settings.wrongCounter += 1;
    }
    if (settings.wrongCounter >= 6) {
        settings.win = false;
        gameOver();
    };
    if (!settings.string.includes("_")) {
        settings.win = true;
        gameOver();
    }
    updateAsciiArt();


    } catch(err) {};
};

function tileClicked(event) {
    try {
        console.log('TILECLICKED');
        let key = event.target.innerHTML.toLowerCase();
        if (settings.word.includes(key)) {
            document.getElementById(key).className = 'tile pressedRight';
            for (let i = 0; i < settings.word.length; i += 1) {
                if (settings.wordArray[i] === key) {
                settings.string[i] = key;
                wordContainer.innerHTML = settings.string.join(" "); 
                }
            };
        } else if (document.getElementById(key).classList.contains('pressedRight') || document.getElementById(key).classList.contains('pressedWrong')) {
        } else {
            document.getElementById(key).className = 'tile pressedWrong';
            settings.wrongCounter += 1;
        }
        if (settings.wrongCounter >= 6) {
            settings.win = false;
            gameOver();
        };
        if (!settings.string.includes("_")) {
            settings.win = true;
            gameOver();
        }
        updateAsciiArt();
        } catch(err) {};
};



function gameOver() {
    tiles.forEach((x) => {
        x.removeEventListener("click", tileClicked);
    })
    
    window.removeEventListener("keydown", keyPressed);
    getDefinition();
    hangmanContainer.style.display = 'flex';
    tiles.forEach((x) => {
        x.style.display = 'none';
    });
    endText.style.display = 'block';
    retryButton.style.display = 'block';

    if (settings.win === true) {
        settings.streak += 1;
        endText.innerHTML = 'You win!';
        settings.correctWords.push(settings.word);
        document.getElementById('correctWords').innerHTML = settings.correctWords.join(" <br> ");
    } else {
        hangmanDiv.innerHTML = hangmanAsciiArt[0] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[1] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[2] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[3] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[4] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[5] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[6] + "<br>";
        hangmanDiv.innerHTML += hangmanAsciiArt[7] + "<br>";
        wordContainer.innerHTML = settings.word;
        settings.streak = 0;
        endText.innerHTML = 'You lose!';
    };
    document.getElementById('streak').innerHTML = settings.streak;
    if (settings.streak >= settings.highscore) {
        settings.highscore = settings.streak;
        document.getElementById('highscore').innerHTML = settings.highscore;
    }
};

playButton.addEventListener("click", playGame);
retryButton.addEventListener("click", playGame);

function getDefinition() {
    definitionDisplay.innerHTML = '';
    let url = ` https://api.dictionaryapi.dev/api/v2/entries/en/${settings.word}`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data[0].meanings.length; i += 1) {
            let pos = data[0].meanings[i].partOfSpeech;
            let def = [];
            for (let j = 0; j < data[0].meanings[i].definitions.length; j += 1) {
                def.push(data[0].meanings[i].definitions[j].definition);
            };
            definitionDisplay.innerHTML += `${settings.word} - ${pos}: ${def.join(" / ")} <br><br>`;
        };
    })
    .catch(() => {
        definitionDisplay.innerHTML = 'Something went wrong while fetching API (most likely no definition found).';
        throw new Error('Something went wrong while fetching API.');
    });
    definitionDisplay.style.display = 'block';
}