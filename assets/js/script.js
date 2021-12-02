var instructions = document.getElementById("instructions");
var startQuiz = document.getElementById("start-button");
var questions = document.querySelectorAll(".questions");
var q1 = document.getElementById("q1");
var q1Answers = document.querySelectorAll(".q1-answers");
var q2 = document.getElementById("q2");
var q2Answers = document.querySelectorAll(".q2-answers");
var q3 = document.getElementById("q3");
var q3Answers = document.querySelectorAll(".q3-answers");
var q4 = document.getElementById("q4");
var q4Answers = document.querySelectorAll(".q4-answers");
var q5 = document.getElementById("q5");
var q5Answers = document.querySelectorAll(".q5-answers");
var allDone = document.getElementById("all-done");
var correctAnswers = document.querySelectorAll(".correct");
var wrongAnswers = document.querySelectorAll(".wrong");
var wrongMessage = document.getElementById("wrong");
var correctMessage = document.getElementById("correct");
var score = document.getElementById("score");
var userInitials = document.getElementById("user-initials");

var timeEl = document.getElementById("time");
var secondsLeft = 75;

for (var i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", function() {
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
        score.textContent = secondsLeft;
        if (secondsLeft < 0) {
            secondsLeft = 0;
            timeEl.textContent = secondsLeft;
            score.textContent = secondsLeft;
        }
    });
}

function setTime() {
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
            secondsLeft--;
        } else {
            secondsLeft = 0;
        }

        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            for (var i = 0; i < questions.length; i++) {
                questions[i].setAttribute("style", "display: none");
            }
            allDone.setAttribute("style", "display: block");
        }

        q5Answers.forEach(item => {
            item.addEventListener("click", function() {   
                clearInterval(timerInterval);
            });
        });

        timeEl.textContent = secondsLeft;
        score.textContent = secondsLeft;
    }, 1000);
}

startQuiz.addEventListener("click", function() {
    instructions.setAttribute("style", "display: none");
    q1.setAttribute("style", "display: block");
    setTime();
});

q1Answers.forEach(item => {
    item.addEventListener("click", function() {
        q1.setAttribute("style", "display: none");
        q2.setAttribute("style", "display: block");
    });
});

q2Answers.forEach(item => {
    item.addEventListener("click", function() {
        q2.setAttribute("style", "display: none");
        q3.setAttribute("style", "display: block");
    });
});

q3Answers.forEach(item => {
    item.addEventListener("click", function() {
        q3.setAttribute("style", "display: none");
        q4.setAttribute("style", "display: block");
    });
});

q4Answers.forEach(item => {
    item.addEventListener("click", function() {
        q4.setAttribute("style", "display: none");
        q5.setAttribute("style", "display: block");
    });
});

q5Answers.forEach(item => {
    item.addEventListener("click", function() {
        q5.setAttribute("style", "display: none");
        allDone.setAttribute("style", "display: block");
    });
});

wrongAnswers.forEach(item => {
    item.addEventListener("click", function() {
        wrongMessage.setAttribute("style", "display: block");
        correctMessage.setAttribute("style", "display: none");
        setTimeout(function() {
            wrongMessage.setAttribute("style", "display: none");
        }, 800);
    });
});

correctAnswers.forEach(item => {
    item.addEventListener("click", function() {
        correctMessage.setAttribute("style", "display: block");
        wrongMessage.setAttribute("style", "display: none");
        setTimeout(function() {
            correctMessage.setAttribute("style", "display: none");
        }, 800);
    });
});

var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userScore = {
        score: secondsLeft,
        initials: userInitials.value
    };

    var localStorageContent = localStorage.getItem("highScores");

    var highScores;
    if (localStorageContent === null) {
        highScores = [];
    } else {
        highScores = JSON.parse(localStorageContent);
    }
    
    highScores.push(userScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href="assets/highscores.html";
});