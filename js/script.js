
function getComputerChoice() {

    const turn = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random()*turn.length);

    let randomChoice = turn[randomIndex];

    return randomChoice;

}

function playRound(playerSelection, computerSelection) {
    const resultArray = ["You Lose! Paper beats Rock", "You Lose! Scissors cuts Paper",
     "You Lose! Rock crushes Scissors", "You Win! Paper beats Rock",
     "You Win! Scissors cuts Paper","You Win! Rock crushes Scissors"];

     let playerChoice = playerSelection.toLowerCase();
     let computerChoice = computerSelection;
     let result = "";

     switch (true) {
      case playerChoice === "rock" && computerChoice === "paper":
          result = resultArray[0];
          break;
  
      case playerChoice === "paper" && computerChoice === "scissors":
          result = resultArray[1];
          break;
  
      case playerChoice === "scissors" && computerChoice === "rock":
          result = resultArray[2];
          break;
  
      case playerChoice === "paper" && computerChoice === "rock":
          result = resultArray[3];
          break;
  
      case playerChoice === "scissors" && computerChoice === "paper":
          result = resultArray[4];
          break;
  
      case playerChoice === "rock" && computerChoice === "scissors":
          result = resultArray[5];
          break;
  
      case playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors":
          result = "Invalid Choice!";
          break;
  
      default:
          result = "Tied! Try Again.";
          break;
  }
  

     return result;

}
function changeColor(element, color) {
   element.style.color = color;
   }

function changeBackgroundColor(element, color) {
   element.style.backgroundColor = color;
}

function styleButton(element) {
   element.style.opacity = 0.7;
   element.style.border = '1px solid red';
   element.style.padding = '10px';
   element.style.margin = '10px';
}

function game(){

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Play your Round(rock, paper, scissors): ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
      
        
    }
}

//game();

document.body.style.padding = '10px';
document.body.style.border = '1px solid black';




const button_container = document.createElement('div');
button_container.className = "btn-container";

const display_result = document.createElement('p');

const result_list = document.createElement('ul');


const rock_btn = document.createElement('button');
styleButton(rock_btn);
rock_btn.textContent = "Rock";
rock_btn.addEventListener("click", function() {
   const playerSelection = "rock";
   const computerSelection = getComputerChoice();
   display_result.textContent = playRound(playerSelection,computerSelection);

   
});
button_container.appendChild(rock_btn);



const scissors_btn = document.createElement('button');
styleButton(scissors_btn);
scissors_btn.textContent = "Scissors";
scissors_btn.addEventListener("click", function() {
   const playerSelection = "scissors";
   const computerSelection = getComputerChoice();
   display_result.textContent = playRound(playerSelection,computerSelection);

   
});

button_container.appendChild(scissors_btn);

const paper_btn = document.createElement('button');
styleButton(paper_btn);
paper_btn.textContent = "Paper";
paper_btn.addEventListener("click", function() {
   const playerSelection = "paper";
   const computerSelection = getComputerChoice();
   display_result.textContent = playRound(playerSelection,computerSelection);

   
});
button_container.appendChild(paper_btn);

display_result.appendChild(result_list);

document.body.appendChild(button_container);





document.body.appendChild(display_result);





