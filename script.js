let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0)
        return "rock"
    else if (computerChoice == 1)
        return "paper"
    else
        return "scissors"
}

function checkGameWinner() {
    gameWinnerMsg = (computerScore > playerScore ? "Computer won the game! Try again." : "You won the game! Congratulations.")
    console.log(gameWinnerMsg)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        resultRound.innerText = "Oops! It's a tie!"
    }
    else if
        ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        playerScore++
        resultRound.innerText = `${humanChoice} beats ${computerChoice}. You won!`
    }
    else {
        resultRound.innerText = `${computerChoice} beats ${humanChoice}. You lose!`
        computerScore++
    }
    resultRound.innerText = `${resultRound.innerText} PC Score: ${computerScore} Your score: ${playerScore}`

}

const container = document.querySelector("#options")

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
    if (playerScore < 5 && computerScore < 5) {
        playRound(playerSelection, computerSelection)
    }
    else
        checkGameWinner()
})


const resultContainer = document.querySelector("#result-container")
const resultRound = document.createElement("p")
resultContainer.append(resultRound)
