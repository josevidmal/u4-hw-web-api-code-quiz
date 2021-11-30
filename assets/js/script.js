var instructions = document.getElementById("instructions");
var startQuiz = document.getElementById("start-button");
var questions = document.querySelectorAll(".questions");
var q1 = document.getElementById("q1");
var q1Answers = document.querySelectorAll(".q1-answers");
var q1Correct = document.getElementById("q1-correct");
var q1Wrong = document.getElementsByClassName("q1-wrong");
var q2 = document.getElementById("q2");
var q2Answers = document.querySelectorAll(".q2-answers");
var q2Correct = document.getElementById("q2-correct");
var q2Wrong = document.getElementsByClassName("q2-wrong");
var q3 = document.getElementById("q3");
var q3Answers = document.querySelectorAll(".q3-answers");
var q3Correct = document.getElementById("q3-correct");
var q3Wrong = document.getElementsByClassName("q3-wrong");
var q4 = document.getElementById("q4");
var q4Answers = document.querySelectorAll(".q4-answers");
var q4Correct = document.getElementById("q4-correct");
var q4Wrong = document.getElementsByClassName("q4-wrong");
var q5 = document.getElementById("q5");
var q5Answers = document.querySelectorAll(".q5-answers");
var q5Correct = document.getElementById("q5-correct");
var q5Wrong = document.querySelectorAll(".q5-wrong");
var allDone = document.getElementById("all-done");
var wrongAnswers = document.querySelectorAll(".wrong");

var timeEl = document.getElementById("time");
var secondsLeft = 75;

for (var i = 0; i < wrongAnswers.length; i++) {
    wrongAnswers[i].addEventListener("click", function() {
        secondsLeft -= 10;
        timeEl.textContent = secondsLeft;
        if (secondsLeft < 0) {
            secondsLeft = 0;
            timeEl.textContent = secondsLeft;
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