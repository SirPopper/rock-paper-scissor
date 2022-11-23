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

let game = () => {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    let playersChoice = prompt("What's your choice?");
    let playerSelection = playersChoice.toLowerCase();

    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);

    alert(computerSelection);
    alert(playRound(playerSelection, computerSelection));

    if (result == "you won!") {
      count++;
    }
  }
  alert("you won " + count + " times!");
};

game();
