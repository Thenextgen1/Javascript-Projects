const quizData = [
    {
        question: "Fastest Character in the dc Universe?",
        a: "Flash",
        b: "QuickSilver",
        c: "Kid-flash",
        d: "Baary'J",
        correct: "c"
    },
    {
        question: "What is the most used programming language in 2019",
        a: "Javascript",
        b: "Java",
        c: "C",
        d: "Python",
        correct: "a"
    },
    {
        question: "Who is the President of the US?",
        a: "Buhari",
        b: "Biden",
        c: "James",
        d: "Trump",
        correct: "b"
    },
    {
        question: "What does html stands for?",
        a: "Markup Language",
        b: "Hyperext Transfer Protocol",
        c: "Cascading Style Sheet",
        d: "Hypertext Markup Language",
        correct: "d"
    },
    {
        question: "Who is the President of Nigeria?",
        a: "Buhari",
        b: "Jonathan",
        c: "Xavi",
        d: "Messi",
        correct: "a"
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitData = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question.toUpperCase();
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}

submitData.addEventListener('click', () => {


    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>
                `;
        }

    }

});