let startQuizBtn = document.querySelector(".startQuizBtn")
let timeBarEl = document.querySelector(".timerBar")


let questions = [
    {question: "1", choices: ["1","2","3","4",], answer:"1"},
    {question: "2", choices: ["2","3","4","5",], answer:"2"},
    {question: "3", choices: ["3","4","5","6",], answer:"3"},
    {question: "4", choices: ["4","5","6","7",], answer:"4"},
]

// Regarding Questions
let questionEl = document.getElementById("questionSlot")
let choiceContainer = document.getElementById("answerChoiceSlot")
let container = document.querySelector(".container")
let currentQuestionIndex = 0;

// choice hookinh
let choiceA = document.getElementById("A")
let choiceB = document.getElementById("B")
let choiceC = document.getElementById("C")
let choiceD = document.getElementById("D")


// Regarding Timer
let timerEl = document.querySelector("#time-remaining")
let timerSlot = document.querySelector("#timer")
let intervalId;
let timer = 75;


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

        if(timer === 0){
        timeBarEl.style.visibility = "hidden";
        clearInterval(intervalId)
        
        }
    },1000);
}



currentQuestionIndex++;



// Quiz Start Button //
startQuizBtn.addEventListener("click", gameStarts);

function gameStarts() {
    startScreenEl.setAttribute('class', 'hide');
    showTimeBar();
    startTimer();
    // showQuizCon.setAttribute('class', 'show');
    renderQuestion();
    
    
}




var startScreenEl = document.getElementById('start-quiz');
var showQuizCon = document.getElementById('quizContainer');

function showQuestion() {
        if (showQuizCon.style.visibility === "hidden") {
            showQuizCon.style.visibility = "visible";
        } else {
            showQuizCon.style.visibility = "hidden";
        }
    }
    
    
    // Game Features//
    
    
    choiceContainer.addEventListener("click", function(event){
        if (event.target.matches("button")){
            console.log(questions[currentQuestionIndex])
            console.log(event.target)
        }
    
    
    })
    

    function renderQuestion() {
        questionEl.textContent = questions[currentQuestionIndex].question;
        choiceA.textContent = questions[currentQuestionIndex].choices[0];
        choiceB.textContent = questions[currentQuestionIndex].choices[1];
        choiceC.textContent = questions[currentQuestionIndex].choices[2];
        choiceD.textContent = questions[currentQuestionIndex].choices[3];


}






