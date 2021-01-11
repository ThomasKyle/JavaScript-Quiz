const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = {}

let questions = [
    {
        question: 'What is 2 + 1?',
        choice1: '3',
        choice2: '1092',
        choice3: '44',
        choice4: '10',
        answer: 1,
    },
    {
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '44',
        choice4: '10',
        answer: 2,
    },
    {
        question: 'What is 0 + 10?',
        choice1: '2',
        choice2: '1092',
        choice3: '44',
        choice4: '10',
        answer: 4,
    },
    {
        question: 'What is 2 + 10?',
        choice1: '2',
        choice2: '1092',
        choice3: '12',
        choice4: '10',
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    qquesstionCounter = 0
    sscore = 0
    availableQuestions = [...questions]
    newQuestions()
}

newQuestions = () => {
    if(availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('clcik', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswers = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'wrong'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()