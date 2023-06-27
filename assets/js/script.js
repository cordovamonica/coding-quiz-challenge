
var startButtonEl = document.querySelector("#start-button");
var timerEl = document.querySelector("countdown");
var count = 40;
var countEl = document.querySelector("#count");
var nextButton = document.querySelector("#next-button");
var quiz = document.querySelector("questions");
var options = document.querySelector("#quiz-options");
var optionButton = document.querySelector("option-button");
var currentQuestion = 0;
var penalty = 10;
var seconds = 0;
var questions = [
    { 
      question: "Common datatypes do NOT include",
    answers: {
      a: "string",
      b: "boolean",
      c: "alerts",
      d: "number"
    },
    correctAnswer: 'c'
  },
  {
    question: "A variable is a named container that allows us to store data in our code",
    answers: {
      a: "true",
      b: "false",
      c: "both",
      d: "neither"
    },
    correctAnswer: 'a'
  },
  {
    question: "JavaScript executes code from:",
    answers: {
      a: "markdown",
      b: "text",
      c: "top to bottom",
      d: "left to right"
    },
    correctAnswer: 'c'
  },
  {
    question: "String data must be written in:",
    answers: {
      a: "quotations",
      b: "parenthesis",
      c: "curly brackets",
      d: "brackets"
    },
    correctAnswer: 'a'
  }];

function setTimer() {
  countEl.textContent = count;
}

startButtonEl.addEventListener("click", function() {
  count--;
  setTimer();
});

loadQuiz();

function loadQuiz() {
    options.innerText = questions[currentQuestion].question;
    a_text.innerText = answers[currentQuestion].a;
    b_text.innerText = questions[currentQuestion].b;
    c_text.innerText = questions[currentQuestion].c;
    d_text.innerText = questions[currentQuestion].d;
  } 