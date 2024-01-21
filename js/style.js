




function getComputerChoice() {

    let turn = ["Rock", "Paper", "Scissors"];

    let randomIndex = Math.floor(Math.random()*turn.length);

    let randomChoice = turn[randomIndex];

    return randomChoice;

}
//console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    const resultArray = ["You Lose! Paper beats Rock", "You Lose! Scissors cuts Paper",
     "You Lose! Rock crushes Scissors", "You Win! Paper beats Rock",
     "You Win! Scissors cuts Paper","You Win! Rock crushes Scissors"];

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));