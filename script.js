let startQuizBtn = document.querySelector(".startQuizBtn");
let timeBarEl = document.querySelector(".timerBar");

// let correctAnswer = questions.
let questions = [
  {
    question: "Please select choice A.",
    choices: ["A", "V", "C", "T"],
    answer: "A",
  },
  { question: "What is 1+1?", choices: ["4", "4", "5", "2"], answer: "2" },
  {
    question: "What is the extension for Javascript?",
    choices: [".zip", ".js", ".lol", ".nah"],
    answer: ".js",
  },
  {
    question: "Please select a number.",
    choices: ["A", "Z", "5", "E"],
    answer: "5",
  },
];

// Regarding Questions
let questionEl = document.getElementById("questionSlot");
let choiceContainer = document.getElementById("answerChoiceSlot");
let container = document.querySelector(".container");
let currentQuestionIndex = 0;

// choice hooking
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");

// Regarding Timer
let timerEl = document.querySelector("#time-remaining");
let intervalId;
let timer = 40;

var startScreenEl = document.getElementById("start-quiz");
var showQuizCon = document.querySelector(".quizContainer");

function showTimeBar() {
  if (timeBarEl.style.visibility === "hidden") {
    timeBarEl.style.visibility = "visible";
  } else {
    timeBarEl.style.visibility = "hidden";
  }
}

function startTimer() {
  intervalId = setInterval(function () {
    timer--;
    timerEl.textContent = timer;

    if (timer <= 0) {
      timeBarEl.style.visibility = "hidden";
      clearInterval(intervalId);
      gameEnds();
    }
  }, 1000);
}

function deductTime() {
  timer -= 10;
}

// Quiz Start Button //
startQuizBtn.addEventListener("click", gameStarts);

function gameStarts() {
  startScreenEl.setAttribute("class", "hide2");
  showTimeBar();
  startTimer();
  showQuizCon.classList.add("show2");
  renderQuestion();
}

// Game Features//

// with a click, question goes to next
choiceContainer.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    verifyAnswer(event);
  }
});

function verifyAnswer(event) {
  if (
    questions[currentQuestionIndex] &&
    questions[currentQuestionIndex].answer === event.target.textContent
  ) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    console.log(event.target.textContent);
    deductTime();
    currentQuestionIndex++;
    renderQuestion();
  }
}

function renderQuestion() {
  // if either of the conditions is being met, end the game
  if (currentQuestionIndex >= questions.length || timer <= 1) {
    score = timer;
    timer = 0;
    let scoreEl = document.querySelector("#total-score");
    scoreEl.textContent = score;
    gameEnds();

    return;
  } else {
    questionEl.textContent = questions[currentQuestionIndex].question;
    choiceA.textContent = questions[currentQuestionIndex].choices[0];
    choiceB.textContent = questions[currentQuestionIndex].choices[1];
    choiceC.textContent = questions[currentQuestionIndex].choices[2];
    choiceD.textContent = questions[currentQuestionIndex].choices[3];
  }
}

// if (currentQuestionIndex >= questions.length || timer <= 1) {
// }

function gameEnds() {
  document.querySelector(".quizContainer").innerHTML = "";
  document.querySelector(".game-over-container").style.display = "block";
}

var showScore = document.querySelector(".display-iniNscore");
var saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var userInitials = document.querySelector("#initials");
  let initial = userInitials.value;
  if (initial === "") {
    console.log("no value entered");
  } else {
    var finalScore = { initials: initial, score: score };
    console.log(finalScore);
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }
    allScores.push(finalScore);
    var newScore = JSON.stringify(allScores);

    // console.log(newScore);
    localStorage.setItem("allScores", newScore);
    for (let i = 0; i < allScores.length; i++) {
      var createLi = document.createElement("li");
      localStorage.getItem("allScores", newScore);
      createLi.innerHTML = allScores[i].initials + " " + allScores[i].score;
      showScore.appendChild(createLi);
    }
  }
});
