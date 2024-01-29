
    function getComputerChoice() {

        const turn = ["rock", "paper", "scissors"];

        let randomIndex = Math.floor(Math.random()*turn.length);

        let randomChoice = turn[randomIndex];

        return randomChoice;

    }

    let player_score = 0; 
    let computer_score = 0;
    

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
            increaseComputerScore();
            break;
    
        case playerChoice === "paper" && computerChoice === "scissors":
            result = resultArray[1];
            increaseComputerScore();
            break;
    
        case playerChoice === "scissors" && computerChoice === "rock":
            result = resultArray[2];
            increaseComputerScore();
            break;
    
        case playerChoice === "paper" && computerChoice === "rock":
            result = resultArray[3];
            increasePlayerScore();
            break;
    
        case playerChoice === "scissors" && computerChoice === "paper":
            result = resultArray[4];
            increasePlayerScore();
            break;
    
        case playerChoice === "rock" && computerChoice === "scissors":
            result = resultArray[5];
            increasePlayerScore();
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

    function styleButton(element) {
    element.style.opacity = 0.7;
    element.style.border = '1px solid red';
    element.style.padding = '10px';
    element.style.margin = '10px';
    }

    
    let result_list;
    
    let result_list_item;

    function handleButtonClick(playerChoice) {
       
        const computerSelection = getComputerChoice();

    // Play the round and get the result
    const roundResult = playRound(playerChoice, computerSelection);

    // Create a new list item for the result
    result_list_item = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = roundResult;

    result_list_item.appendChild(span);

    // Update the existing playerScore and computerScore elements
    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');

    playerScore.textContent = `Player: ${player_score}`;
    computerScore.textContent = `Computer: ${computer_score}`;

    result_list.appendChild(result_list_item);

    // Check for a winner after each round
    if (player_score === 5) {
        alert("You win!");
    } else if (computer_score === 5) {
        alert("You lose!");
    }

        
    }

    function createButton(label, choice) {
        const button = document.createElement('button');
        styleButton(button);
        button.textContent = label;

        button.addEventListener("click", function() {
                
            handleButtonClick(choice);
            console.log("player score: " + player_score);
            console.log("computer score: " + computer_score);
        })

        return button;
        
    }

   

    function initializeGame() {
     
        const button_container = document.createElement('div');
        button_container.className = "btn-container";

        display_result = document.createElement('p');

        result_list = document.createElement('ul');

    
        const rock_btn = createButton("Rock", 'rock');
        const scissors_btn = createButton("Scissors", 'scissors');
        const paper_btn = createButton("Paper", 'paper');

        button_container.appendChild(rock_btn);
        button_container.appendChild(scissors_btn);
        button_container.appendChild(paper_btn);

        document.body.style.padding = '10px';
        document.body.style.border = '1px solid black';

 

        document.body.appendChild(button_container);
        document.body.appendChild(display_result);

        
        document.body.appendChild(result_list);



        
    }

    initializeGame();

    function updateScoreboard() {
        document.getElementById('player-score').innerText = `Player: ${player_score}`;
        document.getElementById('computer-score').innerText = `Computer: ${computer_score}`;
        
       

    }

    function increasePlayerScore() {
        player_score++;
        updateScoreboard();
    }

    function increaseComputerScore() {
        computer_score++;
        updateScoreboard();
    }


    

    

    

    

    

    
    
    

    
    



