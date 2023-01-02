const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "Python",
        c: "JavaScript",
        d: "C",
        correct: "c",
    },
    {
        question: "What does CSS sand for?",
        a: "Cascading script screen",
        b: "Cascading style sheets",
        c: "Class style sheets",
        d: "Cascading style screen",
        correct: "b",
    }, {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "High Markup Language",
        d: "HyperText Machine Language",
        correct: "a",
    }, {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1995",
        c: "1992",
        d: "None of the above",
        correct: "b",

    },
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')

let quizNumber = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[quizNumber]

    question.innerHTML= currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

}

function deselectAnswers(){
    answers.forEach(answer => {
       answer.checked = false;
    })
}

function getSelected() {
    let option

    answers.forEach(answer => {
        if(answer.checked){
            option = answer.id
        }
    })

    return option
}

submitbtn.addEventListener('click', () => {
    const ans = getSelected()

    if(ans) {
        if(ans === quizData[quizNumber].correct){
            score++;
        }

        quizNumber++

        if(quizNumber < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly. </h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
