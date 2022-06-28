
let pick = ['rock', 'paper', 'scisors'];

function computerPlay() {
    return pick[Math.floor(Math.random() * pick.length)]   
}

function playerSelection() {
    chose = prompt('pick: rock, paper or scisors !!')
}




function playRound(){
    let computerSelector = computerPlay
    let result = ""

    if ((computerSelector() == "rock" && playerSelection() == "scisors") ||
        (computerSelector() == "scisors" && playerSelection() == "paper") ||
        (computerSelector() == "paper" && playerSelection() == "rock"))
        {
        playerScore += 1
        alert("you have won !") 
        }
        else if (playerSelection == computerSelection) {
            result = ('It\'s a tie. You both chose ' + playerSelection
                + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        }
        else {
            computerScore += 1

            if(computerScore == 5) {
                result = ('computer won!')
            }
        }
}

        
