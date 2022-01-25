// All answer options
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

/* All our options */

const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question');  //сам вопрос
const numberOfQuestion = document.getElementById('number-of-question'),  //номер вопроса
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); //количество всех вопросов

let indexOfQuestion, //индекс текущего вопроса
    indexOfPage = 0; //индекс страницы

const answersTracker = document.getElementById('answers-tracker'); //обертка для трекера
const btnNext = document.getElementById('btn-next'); //кнопка далее

let score = 0; // итоговый результат

const correctAnswer = document.getElementById('correct-answer'), //количество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'),
      btnTryAgain = document.getElementById('btn-try-again'); //начать викторину занова

const questions = [
    {
        question: 'Самая длинная река мире',
        options: [
            'Нил',
            'Волга',
            'Лена',
            'Амазонка'
        ],
        rightAnswer: 3
    },
    {
        question: 'Самая высокая вершина европы',
        options: [
            'Монблан',
            'Дом',
            'Эльбрус',
            'Вйсхорн'
        ],
        rightAnswer: 2
    },
    {
        question: 'Самый глубокий океан',
        options: [
            'Тихий',
            'Индийский',
            'Атлантический',
            'Северный Ледовитый'
        ],
        rightAnswer: 0
    }
];

numberOfAllQuestions.innerHTML = questions.length; //выводим количество всех вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; //сам вопрос

    //мапим ответы

    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; //установка номера текущей странницы
    indexOfPage++; // увеличение индекса страницы
};

let completedAnswers = []; //масив для заданых вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якорь для проверки одинакаовых вопросов

    if(indexOfPage == questions.length) {
        quizOver();
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber){
                    hitDuplicate = true;                    
                }
            });
            if(hitDuplicate){
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0){
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};


const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer){
            item.classList.add('correct');
        }
    })
};

// удаление всех классов со всех ответов
const enableOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })    
}

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate =()=>{
    if(!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать вариант ответа');
    } else {
        randomQuestion();
        enableOptions();
    }
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer){
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
}


for(option of optionElements){
    option.addEventListener('click', e => checkAnswer(e));
}

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload(); //перегружаем страницу
}

btnTryAgain.addEventListener('click', tryAgain)

btnNext.addEventListener('click', () =>{
    validate();
})

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
}) // функция load загрузится после загрузки страницы 



