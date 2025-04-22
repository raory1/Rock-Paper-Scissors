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

let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()


console.log(`Computer chooses: ${computerChoice}`)
console.log(`You choose: ${humanChoice}`)
playRound(computerChoice, humanChoice)