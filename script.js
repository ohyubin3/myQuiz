let startQuizBtn = document.querySelector(".startQuizBtn")
let timeBarEl = document.querySelector(".timerBar")



let questions = [
    {question: "1", choices: "This is where the choices will go"},
    {question: "2", choices: "This is where the choices will go"},
    {question: "3", choices: "This is where the choices will go"},
    {question: "4", choices: "This is where the choices will go"},
]

// Regarding QUestions
let questionEl = document.querySelector("h1q")
let choiceEl = document.querySelector("h2q")
let container = document.querySelector(".container")
let currentQuestionIndex = 0;

// Regarding Timer
let timerEl = document.querySelector("#time-remaining")
let intervalId;
let timer = 60;







startQuizBtn.addEventListener("click", gameStarts);





function gameStarts() {
    startTimer();
    showTimeBar();

} 

// renderQuestion();
// currentQuestionIndex++;


function showTimeBar() {
    if (timeBarEl.style.display === "none") {
        timeBarEl.style.display = "block";
      } else {
        timeBarEl.style.display = "none";
      }
}

function renderQuestion() {
    questionEl.textContent = questions[currentQuestionIndex].question;
    choiceEl.textContent = questions[currentQuestionIndex].choices;

}




function startTimer() {
    intervalId = setInterval(function(){
        timer--;
        timerEl.textContent = timer;

        if(timer === 0){
            clearInterval(intervalId)
        }


    },1000);

    
}



