const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#save-score-btn')
const finalScore = document.querySelector('#final-score')
const mostRecentScore = document.querySelector('#mostRecentScore')

const highScore = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

const highscoreList = document.querySelector('#highscore-list')
const highScores = JSON.parse(localStorage.getItem('highscores')) || []

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = username.vaule
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.nodeValue
    }

    highScore.push(score)

    highScore.sort((a,b) => {
        return b.score - a.score
    })

    highScore.splice(5)

    localStorage.setItem('highScore', JSON.stringify(highScore))
    window.location.assign('/')
}

highscoreList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score,score}</li>`
}).join('')