let questions = [
    {question: "Please select choice 'b' for this question.", choices: ["a. This is not the answer", "b. This is the answers", "c. This is not the answer", "d. This is not the answer" ]},
    {question: "2", choices: "This is where the choices will go"},
    {question: "3", choices: "This is where the choices will go"},
    {question: "4", choices: "This is where the choices will go"},
]

// Regarding QUestions
let questionEl = document.querySelector("h1")
let choiceEl = document.querySelector("h2")
let container = document.querySelector(".container")
let currentQuestionIndex = 0;

// Regarding Timer
let timerEl = document.querySelector("h3")
let intervalId;
let timer = 60;
let smallTimer = 10;



renderQuestion();

startTimer();




container.addEventListener("click", function() {
    currentQuestionIndex++;
    renderQuestion();
    
    
})

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
