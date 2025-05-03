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

function toggleGameButtons() {
    buttons.forEach(button => {
        button.disabled = !button.disabled
    })
}

function restartGame() {
    toggleGameButtons()
    playerScore = 0
    computerScore = 0
    playerScoreEl.innerText = `Jogador: ${playerScore}`
    computerScoreEl.innerText = `Computador: ${computerScore}`
}

function endGame() {
    toggleGameButtons()
    //showRestartButton()
    const winner = getWinner()
    displayWinner(winner)
}

function displayWinner(winner) {
    let winnerMsg = ""

    if (winner == "player")
        winnerMsg = "You won the game! Congratulations."
    else
        winnerMsg = "Computer won the game! Try again."

    resultEl.innerText = winnerMsg
    console.log(winnerMsg)
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