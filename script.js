let startQuizBtn = document.querySelector(".startQuizBtn");
let timeBarEl = document.querySelector(".timerBar");


// let correctAnswer = questions.
let questions = [
    {question: "1", choices: ["test1","test2","test3","test4",], answer:"test1"},
    {question: "2", choices: ["2","3","4","5",], answer:"3"},
    {question: "3", choices: ["3","4","5","6",], answer:"5"},
    {question: "4", choices: ["4","5","6","7",], answer:"7"},
]


// Regarding Questions
let questionEl = document.getElementById("questionSlot");
let choiceContainer = document.getElementById("answerChoiceSlot");
let container = document.querySelector(".container");
let currentQuestionIndex = 0;

// choice hookinh
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");


// Regarding Timer
let timerEl = document.querySelector("#time-remaining")
let timerSlot = document.querySelector("#timer")
let intervalId;
let timer = 75;

var startScreenEl = document.getElementById('start-quiz');
var showQuizCon = document.querySelector('.quizContainer');


function showTimeBar() {
    if (timeBarEl.style.visibility === "hidden") {
        timeBarEl.style.visibility = "visible";
    } else {
        timeBarEl.style.visibility = "hidden";
    }
}


function startTimer() {
    intervalId = setInterval(function(){
        timer--;
        timerEl.textContent = timer;
        
        if(timer <= 0){
            timeBarEl.style.visibility = "hidden";
            clearInterval(intervalId)
            gameEnds();
        }
    },1000);
}

function gameEnds() {
    document.getElementsByClassName("game-over-container").style.display="block"
}



// Quiz Start Button //
startQuizBtn.addEventListener("click", gameStarts);

function gameStarts() {
    startScreenEl.setAttribute('class', 'hide2');
    showTimeBar();
    startTimer();
    showQuizCon.classList.add('show2');
    renderQuestion();
}





// Game Features//

// with a click, question goes to next
choiceContainer.addEventListener("click", function(event){
    if (event.target.matches("button")){
        verifyAnswer(event);        
    }
})

function verifyAnswer(event) {
    if (questions[currentQuestionIndex].answer === event.target.textContent) {
        currentQuestionIndex++;
        renderQuestion();
    }
    else {    
        console.log(event.target.textContent)
        deductTime();
        renderQuestion();
    }
}

    
function deductTime(){
    timer -= 10;
}






function renderQuestion() {
    questionEl.textContent = questions[currentQuestionIndex].question;
    choiceA.textContent = questions[currentQuestionIndex].choices[0];
    choiceB.textContent = questions[currentQuestionIndex].choices[1];
    choiceC.textContent = questions[currentQuestionIndex].choices[2];
    choiceD.textContent = questions[currentQuestionIndex].choices[3];
}





