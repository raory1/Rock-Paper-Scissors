let playerScore = 0
let computerScore = 0
const container = document.querySelector("#options")
const buttons = container.querySelectorAll("button")
const resultEl = document.querySelector("#round-msg")
const playerScoreEl = document.querySelector("#player-score")
const computerScoreEl = document.querySelector("#computer-score")

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0)
        return "rock"
    else if (computerChoice == 1)
        return "paper"
    else
        return "scissors"
}

function disableGameButtons(){
    buttons.forEach(button => {
        button.disabled = true
    })
}

function endGame() {
    disableGameButtons()
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

container.addEventListener('click', (e) => {
    let target = e.target
    let playerSelection = ""
    let computerSelection = getComputerChoice()

    switch (target.id) {
        case 'rock':
            playerSelection = "rock"
            break;
        case 'paper':
            playerSelection = "paper"
            break;
        case 'scissors':
            playerSelection = "scissors"
            break;
    }

    playRound(playerSelection, computerSelection)

    if (playerScore >= 5 || computerScore >= 5) {
        endGame()
    }
})