function init() {
    renderScores();
}

var scoreBoard = document.querySelector("#score-board");

function renderScores() {

    var lastScore = JSON.parse(localStorage.getItem("userScore"));

    var newTag = document.createElement("li");
    
    if (lastScore !== null) {
        scoreBoard.appendChild(newTag);
        scoreBoard.lastChild.textContent = lastScore.initials + " - " + lastScore.score;      
    } else {
        return;
    }
}

init();

var back = document.getElementById("back");
back.addEventListener("click", function() {
    window.location.href="../index.html";
})

var clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    scoreBoard.innerHTML = "";
    localStorage.clear();
})