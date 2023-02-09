// The below variables establish constants referenced through html that can be reused throughout this file
var mainEl = document.getElementById("main");
var timeEl = document.querySelector(".time");
// var submit = document.querySelector("#submit");
var secondsLeft = 60;
var questionIndex = 0;

// This code allows the quiz to be written with different choices and answers when called upon
let quiz = [
  {
    question:
      "Which of the following is a correct way to declare a variable in javascript?",
    options: ["var", "let", "const", "all of the above"],
    answer: "all of the above",
  },
  {
    question:
      "True/False. Once a variable is declared in javascript it is necessarry to declare it again.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question:
      "True/False. It is necessarry to create multiple javascript files in order to get different functions to work.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    question: "What is the purpose of javascript in relation to a webpage?",
    options: [
      "To make the webpage more interactive",
      "To make the webpage more responsive",
      "To make the webpage more dynamic",
      "To make the webpage more static",
    ],
    answer: "To make the webpage more interactive",
  },
  {
    question:
      "What is the purpose of the console.log() function in javascript?",
    options: [
      "To log the user's input",
      "To log the user's output",
      "To log the user's score",
      "To log the user's time",
    ],
    answer: "To log the user's output",
  },
];

// The below function gives the website a timer and a clear display of it's interactiveness
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till end of quiz";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// This function allows a specific picture, in this case a trophy, to be displayed once the timer reaches 0
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/2563-1.jpg");
  mainEl.appendChild(imgEl);
}

// The below variables establish more constants as mentioned earlier
var Score = localStorage.getItem("#userScore");

var Timer = document.querySelector("#Timer");

// These event listeners interact with the referenced functions to bring full functionality to the webpage
Timer.addEventListener("click", function () {
  setTime();
  displayQuiz();
  document.getElementById("start-container").innerHTML = "";
});

// This function displays the quiz and works when called upon thanks to it's mention in an event listner
function displayQuiz() {
  let question = quiz[questionIndex].question;
  let options = quiz[questionIndex].options;
  var expectedAnswer = quiz[questionIndex].answer;

  let questionEl = document.createElement("div");
  questionEl.textContent = question;
  mainEl.appendChild(questionEl);

  let optionsEl = document.createElement("div");
  mainEl.appendChild(optionsEl);

  for (let j = 0; j < options.length; j++) {
    let optionEl = document.createElement("button");
    optionEl.textContent = options[j];
    optionsEl.appendChild(optionEl);

    optionEl.addEventListener("click", function () {
      if (expectedAnswer === optionEl.textContent) {
        questionEl.remove();
        optionsEl.remove();
        if (questionIndex >= quiz.length - 1) return sendMessage();
        questionIndex++;
        displayQuiz();
      } else {
        secondsLeft -= 5;
      }
    });
  }
}

// This variable establishes a constant to be reused
var save = document.querySelector("#save");
// This event lsitener instructs a score to be saved
save.addEventListener("click", saveScore);

// The below functions attempt to commit a score to local storage
function displayScore() {
  var UserScore = document.querySelector("#userScore");
  UserScore.textContent = Score;
}

function saveScore() {
  localStorage.setItem("Score", Score);
}
console.log(saveScore());

function saveLastScore() {
  saveScore();
  window.location.href = "highscores.html";
}
