const quizData = [
    {
        question: 'Who is the Home minister of India?',
        a: 'Amit Shah',
        b: 'Piyush Goyal',
        c: 'Smriti Irani',
        d: 'Rajnath Singh',
        correct: 'a',
    },{
        question: 'Who is the Defence Minister of India?',
        a: 'Ravi Shankar Prasad',
        b: 'Piyush Goyal',
        c: 'Nitin Gadkari',
        d: 'Rajnath Singh',
        correct: 'd',
    },{
        question: 'Who is the Education Minister of India?',
        a: 'Harsh Vardhan',
        b: 'Ramesh Pokhriyal',
        c: 'Giriraj Singh',
        d: 'Smriti Irani',
        correct: 'b',
    },{
        question: 'How many Union Territories are there in India?',
        a: '8',
        b: '7',
        c: '9',
        d: '6',
        correct: 'a',
    },{
        question: 'What is the capital of Andaman and Nicobar Islands?',
        a: 'Kavaratti',
        b: 'Port Blair',
        c: 'Daman',
        d: 'Kohima',
        correct: 'b',

    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
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
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});