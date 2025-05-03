let playerScore = 0
let computerScore = 0
const container = document.querySelector("#game-options")
const buttons = container.querySelectorAll("button")
const resultEl = document.querySelector("#round-msg")
const playerScoreEl = document.querySelector("#player-score")
const playerImgEl = document.querySelector("#player img")
const computerScoreEl = document.querySelector("#computer-score")
const computerImgEl = document.querySelector("#computer img")
const restartBtn = document.querySelector("#restart")
const modal = document.querySelector("#modal-container")
const endGameTitle = document.querySelector("#end-game-title")
const endGameText = document.querySelector("#end-game-text")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0) {
        computerImgEl.src = "assets/img/rock-choice.svg"
        return "rock"
    }
    else if (computerChoice == 1) {
        computerImgEl.src = "assets/img/paper-choice.svg"
        return "paper"
    }
    else {
        computerImgEl.src = "assets/img/scissors-choice.svg"
        return "scissors"
    }
}

function enableGameButtons() {
    buttons.forEach(button => {
        button.disabled = false
    })
}

function disableGameButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

function restartGame() {
    enableGameButtons()
    playerScore = 0
    computerScore = 0
    playerScoreEl.innerText = `Jogador: ${playerScore}`
    computerScoreEl.innerText = `Computador: ${computerScore}`
    computerImgEl.src = "assets/img/default.png"
    playerImgEl.src = "assets/img/default.png"
    modal.classList.remove('active')
}

function endGame() {
    disableGameButtons()
    //showRestartButton()
    const winner = getWinner()
    updateModalContent(winner)
    setTimeout(() => {
        modal.classList.add('active')
    }, 500)
}

function updateModalContent(winner) {
    let winnerMsg = ""
    if (winner == "player") {
        endGameTitle.innerText = "You won!"
        endGameText.innerText = "You're the champion this time!"
    }
    else {
        endGameTitle.innerText = "Game over"
        endGameText.innerText = "Crushed! Want revenge?"
    }
}

function getWinner() {
    const winner = playerScore > computerScore ? "player" : "computer"
    return winner
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        resultEl.innerText = "Oops! It's a tie!"
    }
    else if
        ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        playerScore++
        resultEl.innerText = `${humanChoice} beats ${computerChoice}. You won!`
    }
    else {
        resultEl.innerText = `${computerChoice} beats ${humanChoice}. You lose!`
        computerScore++
    }

    playerScoreEl.innerText = `Jogador: ${playerScore}`
    computerScoreEl.innerText = `Computador: ${computerScore}`
}

buttons.forEach(button =>
    button.addEventListener('click', (e) => {
        let playerSelection = e.currentTarget.id
        let computerSelection = getComputerChoice()

        switch (playerSelection) {
            case 'rock':
                playerSelection = "rock"
                playerImgEl.src = "assets/img/rock-choice.svg"
                break;
            case 'paper':
                playerSelection = "paper"
                playerImgEl.src = "assets/img/paper-choice.svg"
                break;
            case 'scissors':
                playerSelection = "scissors"
                playerImgEl.src = "assets/img/scissors-choice.svg"
                break;
        }

        playRound(playerSelection, computerSelection)

        if (playerScore >= 5 || computerScore >= 5) {
            endGame()
        }
    }))

restartBtn.addEventListener('click', (e) => {
    restartGame()
})