let startQuizBtn = document.querySelector(".startQuizBtn")
let timeBarEl = document.querySelector(".timerBar")



let questions = [
    {question: "1", choices: "This is where the choices will go"},
    {question: "2", choices: "This is where the choices will go"},
    {question: "3", choices: "This is where the choices will go"},
    {question: "4", choices: "This is where the choices will go"},
]

// Regarding Questions
let questionEl = document.querySelector("h1q")
let choiceEl = document.querySelector("h2q")
let container = document.querySelector(".container")
let currentQuestionIndex = 0;

// Regarding Timer
let timerEl = document.querySelector("#time-remaining")
let timerSlot = document.querySelector("#timer")
let intervalId;
let timer = 75;






startQuizBtn.addEventListener("click", gameStarts);





function gameStarts() {
    showTimeBar();
    startTimer();

} 

// renderQuestion();
// currentQuestionIndex++;


function showTimeBar() {
    if (timeBarEl.style.visibility === "hidden") {
        timeBarEl.style.visibility = "visible";
      } else {
        timeBarEl.style.visibility = "hidden";
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
        timeBarEl.style.visibility = "hidden";
        clearInterval(intervalId)
        
        }


    },1000);

    
}



