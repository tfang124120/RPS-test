const buttons = document.querySelectorAll('.btn');
const rounds = document.querySelector('.round');
const descText = document.querySelector('.desc-txt');
const buttonPlayAgain = document.querySelector('.play-again');

let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

function roundCount(){
    roundNum++;
    rounds.innerText = `Round: ${roundNum}`;
    return roundNum;
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const computerSelection = choices[Math.floor(Math.random()*3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    switch(true){
        case (playerSelection === computerSelection):
            descText.innerText = `Both sides played ${playerSelection}! It's a tie!`;
            break;
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            descText.textContent = `Player's ${playerSelection} beats the Computer's ${computerSelection}!`;
            playerScore += 1;
            break;
        default:
            descText.innerText = `Player's ${playerSelection} loses to the Computer's ${computerSelection}!`;
            computerScore += 1;
            break;
    }

    const points = document.querySelector('.points');
    points.innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
    return [playerScore, computerScore];
}

function endGame(playerPoints, computerPoints){
    if (playerPoints === 5 || computerPoints === 5){
        buttons.forEach((button)=>{
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button', 'opacity');
        });

        const gameOverTxt = document.querySelector('.game-over-txt');
        if(playerScore > computerScore){
            descText.innerText = 'Player wins!';
            gameOverTxt.textContent = 'You won!';
        }
        else{
            descText.innerText = 'Computer wins!';
            gameOverTxt.textContent = 'You lose!';
        }
        buttonPlayAgain.style.visibility = 'visible';
    }
}

function reset(){
    buttonPlayAgain.addEventListener('click',()=> {
        window.location.reload;
    });
}

function game(){
    let playerSelection;
    buttons.forEach((choice)=>{
        choice.addEventListener('click',() => {
            if(choice.classList.contains('rock-btn')){
                playerSelection = 'Rock';
            }
            else if (choice.classList.contains('paper-btn')){
                playerSelection = 'Paper';
            }
            else{
                playerSelection = 'Scissors';
            }
            roundCount();
            playRound(playerSelection, getComputerChoice());
            endGame(playerScore, computerScore);
            reset();
        });
    });
}

game();