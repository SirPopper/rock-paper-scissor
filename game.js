let getRandomNumber = () => Math.floor(Math.random() * 3);

let getComputerChoice = () => {
  const number = getRandomNumber();
  if (number == 0) {
    return "rock";
  } else if (number == 1) {
    return "paper";
  } else {
    return "scissor";
  }
};

let playersChoice = prompt("What's your choice?");
let playerSelection = playersChoice.toLowerCase();

let computerSelection = getComputerChoice();

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "even";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "you won!";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "you won!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "you won!";
  } else {
    return "you lost!";
  }
};

alert(computerSelection);
alert(playRound(playerSelection, computerSelection));
