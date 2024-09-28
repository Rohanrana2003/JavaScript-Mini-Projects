const questions = [
    {
        question:"Which is the largest animal in the world",
        answers: [
            {text: "Shark", correct: "false"},
            {text: "Blue Whale", correct: "true"},
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "false"},
        ]
    },
    {
        question:"Which is the smallest country in the world",
        answers: [
            {text: "Bhutan", correct: "false"},
            {text: "Vatican City", correct: "true"},
            {text: "Nepal", correct: "false"},
            {text: "Sri lanka", correct: "false"},
        ]               
    },
    {
        question:"Which is the largest desert in the world",
        answers: [
            {text: "Thar", correct: "false"},
            {text: "Sahara", correct: "false"},
            {text: "Gobi", correct: "false"},
            {text: "Antartica", correct: "true"},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers: [
            {text: "Asia", correct: "false"},
            {text: "Australia", correct: "true"},
            {text: "Arctic", correct: "false"},
            {text: "Africa", correct: "false"},
        ]
    },
]

const btn = document.getElementById('next')
const options = document.querySelector('.answers');


let currentQuestionIndex = 0;
let score = 0;


const startQuiz = () =>{
    currentQuestionIndex = 0;
    score = 0;
    btn.innerHTML = 'Next'
    showQuestion();

}

const showQuestion = () =>{
    resetState();
    let currQuestion = questions[currentQuestionIndex];
    let queNo = currentQuestionIndex + 1; 

    document.querySelector('.question').innerHTML = queNo + '. ' +  currQuestion.question;

    currQuestion.answers.forEach(element => {
        let p = document.createElement('p');
        p.classList.add('option');
        p.innerText = element.text;
        options.appendChild(p);

        p.addEventListener('click', ()=>{
            if(element.correct === 'true'){
                p.classList.add('right');
                score++;
            }
            else if(element.correct === 'false'){
                p.classList.add('wrong');
            }
            
            btn.style.display = 'block';
        })
    }); 
}

const resetState = () =>{
    btn.style.display = 'none';
    while(options.firstChild){
        options.removeChild(options.firstChild);
    }
}

const showScore = () =>{
    resetState();

    if(score == questions.length){
        document.querySelector('.quiz-body').innerHTML =`<h1>Congratulations! </br> Your scored ${score} out of ${questions.length} !</h1>`;
    }
    else{
        document.querySelector('.quiz-body').innerHTML =`<h1>Your scored ${score} out of ${questions.length} !</h1>`;
    }

    btn.innerHTML = 'Play Again';
    btn.style.display = 'block';

}


const handleNextButton = () =>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


btn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();