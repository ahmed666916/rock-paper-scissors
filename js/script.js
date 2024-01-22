




function getComputerChoice() {

    const turn = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random()*turn.length);

    let randomChoice = turn[randomIndex];

    return randomChoice;

}
//console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    const resultArray = ["You Lose! Paper beats Rock", "You Lose! Scissors cuts Paper",
     "You Lose! Rock crushes Scissors", "You Win! Paper beats Rock",
     "You Win! Scissors cuts Paper","You Win! Rock crushes Scissors"];

     let playerChoice = playerSelection.toLowerCase();
     let computerChoice = computerSelection;
     let result = "";

     if (playerChoice === "rock" && computerChoice === "paper") {
        result = resultArray[0];
        
     }else if (playerChoice === "paper" && computerChoice === "scissors"){
        result = resultArray[1];

     }else if(playerChoice === "scissors" && computerChoice === "rock"){
        result = resultArray[2];

     }else if(playerChoice === "paper" && computerChoice === "rock"){
        result = resultArray[3];

     }else if(playerChoice === "scissors" && computerChoice === "paper"){
        result = resultArray[4];
     }else if(playerChoice === "rock" && computerChoice === "scissors"){
        result = resultArray[5];
     }else if(playerChoice !== "rock"|| playerChoice !=="paper" || playerChoice !== "scissors") {
      result = "Invalid Choice! ";


     }else{
        result = "Tied! Try Again."
     }

     return result;

}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();

//console.log(playRound(playerSelection, computerSelection));


function game(){

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play your Round(rock, paper, scissors): ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
      
        
    }
}

game();