const htmlTiles = document.getElementsByClassName('tile');
const tiles = Array.prototype.slice.call(htmlTiles);
const playButton = document.getElementById('playButton');
tiles.forEach((x) => {
    x.style.display = 'none';
})


function playGame() {
    playButton.style.display = 'none';
    tiles.forEach((x) => {
        x.style.display = 'inline';
    })
}



window.addEventListener("keydown", (event) => {
    let key = event.key.toString();
    document.getElementById(key).className = 'tile pressed';
});

tiles.forEach((x) => {
    x.addEventListener("click", (event) => {
        event.target.className = 'tile pressed';
    });
})

playButton.addEventListener("click", playGame);