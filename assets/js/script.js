
var questions = [
  { 
    question: "Common datatypes do NOT include",
  answers: [
    "a. string",
    "b. boolean",
    "c. alerts",
    "d. number"
  ],
  correctAnswer: "c. alerts",
},
{
  question: "A variable is a named container that allows us to store data in our code",
  answers: [
    "a. true",
    "b. false",
    "c. both",
    "d. neither"
  ],
  correctAnswer: "a. true",
},
{
  question: "JavaScript executes code from:",
  answers: [
    "a. markdown",
    "b. text",
    "c. top to bottom",
    "d. left to right"
  ],
  correctAnswer: "c. top to bottom"
},
{
  question: "String data must be written in:",
  answers: [
    "a. quotations",
    "b. parenthesis",
    "c. curly brackets",
    "d. brackets"
  ],
  correctAnswer: "a. quotations"
}];

var startButtonEl = document.querySelector("#start-button");
var timerEl = document.querySelector("countdown");
var count = 40;
var countEl = document.querySelector("#count");
var nextButton = document.querySelector("#next-button");
var quiz = document.querySelector("questions");
var answers = document.querySelector("#quiz-options");
var optionButton = document.querySelector("option-button");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");
var currentQuestion = 0;
var penalty = 10;
var seconds = 0;


function startTimer() {
  count = 40;
  var timer = setInterval(function() {
    count--;
    setTimer();
    if (count === 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function setTimer() {
  countEl.textContent = count;
}

function startQuiz() {
  startTimer();
  showQuestion();
}
startTimer();

function showQuestion() {
  var question = questions[currentQuestion];
  quiz.textContent = questions.question;
  answerA.textContent = questions.answers[0];
  answerB.textContent = questions.answers[1];
  answerC.textContent = questions.answers[2];
  answerD.textContent = questions.answers[3];
}
showQuestion();

function checkAnswer(answer) {
  var question = questions[currentQuestion];
  if (question.correctAnswer === answer) {
    alert("Correct!");
  } else {
    alert("Wrong!");
    count -= penalty;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  alert("Quiz complete!");
}

startButtonEl.addEventListener("click", startQuiz);
answerA.addEventListener("click", function() {
  checkAnswer("a");
}
);
answerB.addEventListener("click", function() {
  checkAnswer("b");
}
);
answerC.addEventListener("click", function() {
  checkAnswer("c");
}
);
answerD.addEventListener("click", function() {
  checkAnswer("d");
}
);









