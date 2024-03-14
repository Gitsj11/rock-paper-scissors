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
    if (computerSelection === playerSelection) {
         return tie;
    }
    if (computerSelection === "scissors" && playerSelection === "rock") {
        return playerWin;
    }
    if (computerSelection === "scissors" && playerSelection === "paper") {
        return computerWin;
    }
    if (computerSelection === "paper" && playerSelection === "paper") {
        return tie;
    }
    if (computerSelection === "paper" && playerSelection === "rock") {
        return computerWin;
    }
    if (computerSelection === "paper" && playerSelection === "scissors") {
        return playerWin;
    }
    if (computerSelection === "rock" && playerSelection === "rock") {
        return tie;
    }
    if (computerSelection == "rock" && playerSelection == "paper") {
        return playerWin;
    }
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return computerWin;
    }
}
var playerScore = 0;
var computerScore = 0;
var tieScore = 0;

function playGame() { //Begins game of Rock, Paper, Scissors
    var startGame = prompt("Do you want to play Rock, Paper, Scissors", "");
    play = startGame.toLowerCase();
    if (play === "yes") {
        maxRounds = 1000;
        for (i = 0; i < maxRounds; i++) { //Simulates number of rounds in the game
            const computerSelection = getComputerChoice(); //Gets computer selection
            var playerChoice = prompt("Choose Rock, Paper, or Scissors", ""); //Asks user for selection of Rock, Paper, or Scissors
            const playerSelection = playerChoice.toLowerCase();
            playerWin = "You Win, " + playerSelection.charAt(0).toUpperCase() +  playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            computerWin = "You Lose, " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() +  playerSelection.slice(1);
            tie = "Tie, both selections were " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
            playerGameWon = "PLAYER WINS THE GAME";
            computerGameWon = "COMPUTER WINS THE GAME";
            roundResult = playRound(playerSelection, computerSelection); //Gets result of current round
            console.log(roundResult);
            gameScore(roundResult);
            console.log("Player Score: " + playerScore); //Shows current player score
            console.log("Computer Score: " + computerScore); //Shows current computer score
            if (playerScore === 5) {
                return playerGameWon; //Returns a string saying the player won the game
            } else if (computerScore === 5) {
                return computerGameWon; //Returns a string saying the computer won the game
            }
        }
    }
    else {
        return "Game not started, Yes was not chosen or typed incorrectly";
    }
}
console.log(playGame());

function gameScore(result) { //Takes result from current round and calculates score
    if (result === playerWin) {
        playerScore++;
    } else if (result === computerWin) {
        computerScore++;
    } else {
        tieScore++;
    }
}
