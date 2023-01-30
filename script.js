
// The below variables establish constants referenced through html that can be reused throughout this file
var mainEl = document.getElementById("main");
var timeEl = document.querySelector(".time");
var secondsLeft = 60;
var submit = document.querySelector("#submit");

// The below action gives the checkAnswers function full interactiveness
submit.addEventListener("click", checkAnswers);

// The below function gives the website a timer and a clear display of it's interactiveness
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till end of quiz";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

// This function allows a specific picture, in this case a trophy, to be displayed once the timer reaches 0
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src","images/2563-1.jpg");
  mainEl.appendChild(imgEl);
}

// The below variables establish more constants as mentioned earlier
var Score = localStorage.getItem("Score");

var Timer = document.querySelector("#Timer");

// These event listeners interact with the referenced functions to bring full functionality to the webpage
Timer.addEventListener("click", setTime);
Timer.addEventListener("click", displayQuiz);

// This code allows the quiz to be written with different choices and answers when called upon
let quiz = [   {    question: "Which of the following is a correct way to declare a variable in javascript?",    
options: ["var", "let", "const", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "True/False. Once a variable is declared in javascript it is necessarry to declare it again.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "True/False. It is necessarry to create multiple javascript files in order to get different functions to work.",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "What is the purpose of javascript in relation to a webpage?",
    options: ["To make the webpage more interactive", "To make the webpage more responsive", "To make the webpage more dynamic", "To make the webpage more static"],
    answer: "To make the webpage more interactive"
  },
  {
    question: "What is the purpose of the console.log() function in javascript?",
    options: ["To log the user's input", "To log the user's output", "To log the user's score", "To log the user's time"],
    answer: "To log the user's output"
  }
];

// This function displays the quiz and works when called upon thanks to it's mention in an event listner
function displayQuiz() {
  for (let i = 0; i < quiz.length; i++) {
      let question = quiz[i].question;
      let options = quiz[i].options;
      
      let questionEl = document.createElement("div");
      questionEl.textContent = question;
      mainEl.appendChild(questionEl);
 
      let optionsEl = document.createElement("ul");
      mainEl.appendChild(optionsEl);

      for (let j = 0; j < options.length; j++) {
          let optionEl = document.createElement("li");
          optionEl.textContent = options[j];
          optionsEl.appendChild(optionEl);
      }
  }
}

// This function allows the answers to be displayed after the user has answered them
function checkAnswers() {
  for (let i = 0; i < quiz.length; i++) {
      let answer = quiz[i].answer;
      let userAnswer = prompt(`Answer: ${answer}`);
      if (userAnswer === answer) {
          console.log("Correct!");
      } else {
          console.log("Wrong!");
      }
  }

}

// This variable establishes a constant to be reused
var save = document.querySelector("#save");
// This event lsitener instructs a score to be saved
save.addEventListener("click", saveLastScore);

// This function aims to save the last score inputed 
function saveLastScore() {
  localStorage.setItem("userScore", UserScore);
}
console.log(UserScore)

var UserScore = document.querySelector("#userScore");

var Timer = document.querySelector("#Timer");












