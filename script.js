let humanScore = 0
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

function getHumanChoice() {
    let humanChoice = prompt().toLowerCase()
    return humanChoice
}

function checkGameWinner() {
    gameWinnerMsg = (computerScore > humanScore ? "Computer won the game! Try again" : "You won the game! Congratulations.")
    console.log(gameWinnerMsg)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("tie")
    }
    else if
        ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++
        console.log(`${humanChoice} beats ${computerChoice}. You won!`)
    }
    else {
        console.log(`${computerChoice} beats ${humanChoice}. You lose!`)
        computerScore++
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log(`Computer chooses: ${computerSelection}`)
        console.log(`You choose: ${humanSelection}`)
        playRound(computerSelection, humanSelection)
    }
    checkGameWinner()
}

playGame()