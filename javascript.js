function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}
