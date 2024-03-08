function getComputerChoice() {
    choice = ""
    choiceSelection = Math.floor(Math.random() * 3) + 1; //Generates random number between 1 and 3
    //console.log(choiceSelection);
    switch (choiceSelection) {
        case 1 : choice = "Rock"
        break;

        case 2 : choice = "Paper"
        break;

        case 3 : choice = "Scissors"
        break;

        default: "No valid move found";

    }
    return choice;
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {

}