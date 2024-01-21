




function getComputerChoice() {

    let turn = ["rock", "paper", "scissor"];

    let randomIndex = Math.floor(Math.random()*turn.length);

    let randomChoice = turn[randomIndex];

    return randomChoice;

}

console.log(getComputerChoice());


