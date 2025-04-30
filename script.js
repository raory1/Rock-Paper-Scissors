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
    gameWinnerMsg = (computerScore > humanScore ? "Computer won the game! Try again." : "You won the game! Congratulations.")
    console.log(gameWinnerMsg)
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.innerText = "Oops! It's a tie!"
    }
    else if
        ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++
        result.innerText = `${humanChoice} beats ${computerChoice}. You won!`
    }
    else {
        result.innerText = `${computerChoice} beats ${humanChoice}. You lose!`
        computerScore++
    }
}

function playGame() {
    for (i = 0; i < 1; i++) {
        //let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        console.log(`Computer chooses: ${computerSelection}`)
        console.log(`You choose: ${humanSelection}`)
        playRound(humanSelection, computerSelection)
    }
    checkGameWinner()
}

//playGame()



const container = document.querySelector("#options")
if (container) {
    console.log(container)
}

container.addEventListener('click', (e) => {
    let target = e.target
    let playerSelection = ""

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
    playRound(playerSelection, getComputerChoice())
})

const resultContainer = document.querySelector("#result-container")
const result = document.createElement("p")
result.innerText = "adasdadsa"
resultContainer.append(result)
