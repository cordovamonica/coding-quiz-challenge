
var startButtonEl = document.querySelector("#start-button");
var timerEl = document.querySelector("countdown");
var count = 40;
var countEl = document.querySelector("#count");
var nextButton = document.querySelector("#next-button");
var quiz = document.querySelector("questions");
var options = document.querySelector("#quiz-options");
var optionButton = document.querySelector("option-button");
var answerA = document.querySelector("#a");
var answerB = document.querySelector("#b");
var answerC = document.querySelector("#c");
var answerD = document.querySelector("#d");
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
  answerA.textContent = questions.answers.a;
  answerB.textContent = questions.answers.b;
  answerC.textContent = questions.answers.c;
  answerD.textContent = questions.answers.d;
}

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









