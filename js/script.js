




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
     }else if(playerChoice !== "rock"&& playerChoice !=="paper" && playerChoice !== "scissors") {
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

//game();

const button_container = document.createElement('div');



const rock_btn = document.createElement('button');
rock_btn.textContent = "Rock";
rock_btn.addEventListener("click", function() {
   const playerSelection = "rock";
   const computerSelection = getComputerChoice();
   console.log(playRound(playerSelection,computerSelection));
   
});
button_container.appendChild(rock_btn);



const scissors_btn = document.createElement('button');
scissors_btn.textContent = "Scissors";

button_container.appendChild(scissors_btn);

const paper_btn = document.createElement('button');
paper_btn.textContent = "Paper";
button_container.appendChild(paper_btn);

document.body.appendChild(button_container);





