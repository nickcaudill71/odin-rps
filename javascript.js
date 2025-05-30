function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getHumanChoice() {
    return prompt("Please enter your choice between the following options: (rockrock, paper, scissors)");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    
    if (human === computer) {
        console.log("You tied!");
    }
    else {
        result = "";

        if (human === "rock" && computer === "paper") {
            result = "You lose! Paper beats Rock";
            computerScore++;
        }
        else if (human === "rock" && computer === "scissors") {
            result = "You win! Rock beats Scissors";
            humanScore++;
        }
        else if (human === "paper" && computer === "rock") {
            result = "You win! Paper beats Rock";
            humanScore++;
        }
        else if (human === "paper" && computer === "scissors") {
            result = "You lose! Scissors beats Paper";
            computerScore++;
        }
        else if (human === "scissors" && computer === "rock") {
            result = "You lose! Rock beats Rock";
            computerScore++;
        }
        else if (human === "scissors" && computer === "paper") {
            result = "You win! Scissors beats Paper";
            humanScore++;
        }
        console.log(result);
    }
}

let buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(elem => {
    elem.addEventListener('click', e => {
       playRound(e.target.textContent, getComputerChoice());
    })
});