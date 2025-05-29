function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getHumanChoice() {
    return prompt("Please enter your choice between the following options: (rockrock, paper, scissors)");
}
