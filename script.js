var playerScore = 0;
var computerScore = 0;
var tieScore = 0;

const playerWin = "Player wins round";
const computerWin = "Computer wins round";
const tie = "TIE";

/* var clicked = false;
let startGame = document.querySelector('#startGame');

startGame.addEventListener('click', () => {
    clicked = true;
    alert('Start Game was clicked');
}) */

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playGame("rock"); //Uses rock as player selection
})

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playGame("paper"); //Uses paper as player selection
})

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playGame("scissors"); //Uses scissors as player selection
})

let results = document.querySelector('#results');
const updateUI = (playerSelection, computerSelection, result) => {
    let textContent = '';

    textContent = `
        <p>Computer Selection: ${computerSelection}</p>
        <p>Player Selection: ${playerSelection}</p>
        <p>Winner: ${result}</p>
        <p>Computer Score: ${computerScore}</p>
        <p>Player Score: ${playerScore}</p>
        <p>Number of Ties: ${tieScore}</p>

        `;

    results.innerHTML = textContent;
    
    
};
 
function getComputerChoice() {
    choice = ""
    choiceSelection = Math.floor(Math.random() * 3) + 1; //Generates random number between 1 and 3
    //console.log(choiceSelection);
    switch (choiceSelection) {
        case 1 : choice = "rock"
        break;
        case 2 : choice = "paper"
        break;
        case 3 : choice = "scissors"
        break;
        default: "No valid move found";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) { //Plays one round of Rock, Paper, Scissors
    let result = ''
    if (computerSelection === playerSelection) {
        result = tie;
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        result = playerWin;
    }
    if (computerSelection === "scissors" && playerSelection === "paper") {
        result = computerWin;
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        result = computerWin;
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        result = playerWin;
    }
    if (computerSelection == "rock" && playerSelection == "paper") {
        result = playerWin;
    }
    if (computerSelection == "rock" && playerSelection == "scissors") {
        result = computerWin;
    }
    if (computerSelection === "rock" && playerSelection === "rock") {
        return tie;
    }
    if (computerSelection === "paper" && playerSelection === "paper") {
        return tie;
    }
    //updateUI(playerSelection, computerSelection, result);
    return result;
}



const playGame = (playerSelection) => {
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    if (result == playerWin) playerScore++;
    else if (result == computerWin) computerScore++;
    else if (result == tie) tieScore++;

    updateUI(playerSelection, computerSelection, result); //Updates the results on page

    console.log(playerScore);
    console.log(computerScore);
    console.log(tieScore);
    console.log(result);

    if (playerScore >= 5) {
        alert('Player has won the game');
    }
    else if (computerScore >= 5) {
        alert('Computer has won the game');
    }

}




