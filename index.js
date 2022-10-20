const choices = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
    let compChoice = choices[Math.floor(Math.random()*3)];
    return compChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    let plChoice = playerSelection.toUpperCase();
    let coChoice = computerSelection.toUpperCase();

    if (plChoice == "ROCK" && coChoice == "PAPER"){
        return computerWinRound;
    }
    else if (plChoice == "ROCK" && coChoice == "SCISSORS"){
        return playerWinRound;
    }
    else if (plChoice == "SCISSORS" && coChoice == "ROCK"){
        return computerWinRound
    }
    else if (plChoice == "SCISSORS" && coChoice == "PAPER"){
        return playerWinRound;
    }
    else if (plChoice == "PAPER" && coChoice == "SCISSORS"){
        return computerWinRound;
    }
    else if (plChoice == "PAPER" && coChoice == "Rock"){
        return playerWinRound;
    }
    else {
        return tie;
    }
}

let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let tie = "It's a tie!"
let playerWin = "Player wins the game!"
let computerWin = "Computer wins the game!"

function game(){
    let playerScore = 0;
    let compScore = 0;
    let tieScore = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === playerWinRound){
            playerScore++;
        }
        else if (result === computerWinRound){
            compScore++;
        }
        else{
            tieScore++;
        }
        console.log(result);
    }
    if (playerScore > compScore){
        return console.log(playerWin);
    }
    else if(playerScore == compScore){
        return console.log(tie);
    }
    else {
        return console.log(computerWin);
    }
}

console.log(game());