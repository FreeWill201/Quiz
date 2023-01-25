//Need to get Start Quiz button to start timer. Create Questions.

var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");

var secondsLeft= 45;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Time left till end of Quiz.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

  setTime();

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src","images/2563-1.jpg");
    mainEl.appendChild(imgEl);
}


function saveLastScore() {
    var userScore = {
        user: user.value,
        score: score.value,
};
localStorage.setItem('userScore', JSON.stringify(userScore));
}

var Score = querySelector("#Score");
var HighScore = localStorage.getItem("HighScore");

Score.textContent = HighScore;

var Timer = document.querySelector("#Timer");
Timer.addEventListener("click", setTime);