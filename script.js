//Need to get Start Quiz button to start timer. Create Questions.

var mainEl = document.getElementById("main");




var timeEl = document.querySelector(".time");
var secondsLeft = 60;

// Set timer to start when Start Quiz button is clicked.
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


function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src","images/2563-1.jpg");
  mainEl.appendChild(imgEl);
}



var HighScore = localStorage.getItem("Score");


var Timer = document.querySelector("#Timer");

Timer.addEventListener("click", setTime);

// Please make the button referenced in index.html set the timer and start the quiz.
// You can use the code from the stopwatch activity as a starting point.
// You will need to create a function to display the questions and answers.
// You will need to create a function to check the answers.
// You will need to create a function to display the final score.
let quiz = [   {    question: "Which of the following is a coorect way to declare a variable in javascript?",    options: ["var", "let", "const", "all of the above"],
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



// This function will display the quiz questions and answers.

function displayQuiz() {
  for (let i = 0; i < quiz.length; i++) {
      let question = quiz[i].question;
      let options = quiz[i].options;
      let answer = quiz[i].answer;
      console.log(question);
      for (let j = 0; j < options.length; j++) {
          console.log(`${j+1}. ${options[j]}`);
      }
      console.log(`Answer: ${answer}\n`);
  }
}


 // This function will check the answers.
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



function saveLastScore() {
  var userScore = {
      user: user.value,
      score: score.value,
};
localStorage.setItem('userScore', JSON.stringify(userScore));
}





var Timer = document.querySelector("#Timer");

Timer.addEventListener("click", setTime);
Timer.addEventListener("click", displayQuiz);

// Please make the button referenced in index.html set the timer and start the quiz.
// You can use the code from the stopwatch activity as a starting point.
// You will need to create a function to display the questions and answers.
// You will need to create a function to check the answers.
// You will need to create a function to display the final score.





