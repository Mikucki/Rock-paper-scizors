
function playerChoice() {
    let playerSelection = prompt("pick: rock paper or scisors")
    while (playerSelection == null)
        prompt("I said pick ROCK, PAPER, SCISORS!!!!!!!!!!")
return(playerSelection)
}
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    computerChoices = choices[Math.floor(Math.random() * choices.length)]
return(computerChoices)  
}


let playerSelection = playerChoice() 
let computerSelection = computerPlay()

function playRound(playerSelection , computerSelection) {
    let result = ""
    let playerScore = ""
    let computerScore = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection
            + "Player score: " + playerScore + "Computer score: " + computerScore)

        if (playerScore == 5) {
            console.log("You won the game! Reload the page to play again")
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "Player score: " + playerScore + "Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "Player score: " + playerScore + "Computer score: " + computerScore)

        if (computerScore == 5) {
            console.log('I won the game! Reload the page to play again')

        }
    }
}

let play = playRound()



console.log(play)
