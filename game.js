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

//adding buttons to the body through DOM

//create buttons
const btnScissor = document.createElement("button");
btnScissor.setAttribute("id", "btn-scissor");
btnScissor.textContent = "Scissor";
document.body.appendChild(btnScissor);

const btnRock = document.createElement("button");
btnRock.setAttribute("id", "btn-rock");
btnRock.textContent = "Rock";
document.body.appendChild(btnRock);

const btnPaper = document.createElement("button");
btnPaper.setAttribute("id", "btn-paper");
btnPaper.textContent = "Paper";
document.body.appendChild(btnPaper);

//container div
const container = document.querySelector("#container");

//eventListener
let count = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.textContent.toLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    //create div to show what you chose
    //create div to show what computer selected
    const playerChoice = document.createElement("div");
    playerChoice.setAttribute("id", "playerChoice");
    playerChoice.textContent = `You chose: ${playerSelection}`;
    container.appendChild(playerChoice);

    //create div to show what computer selected
    const compSelection = document.createElement("div");
    compSelection.setAttribute("id", "compSelection");
    compSelection.textContent = `Computer chose: ${computerSelection}`;
    container.appendChild(compSelection);

    //create div to show results
    const result = document.createElement("div");
    result.setAttribute("id", "result");
    result.textContent = `${playRound(playerSelection, computerSelection)}`;
    container.appendChild(result);

    //print count
    if (result.textContent == "you won!") {
      count++;
      console.log(count);
    }

    if (count == 5) {
      console.log("game over");
      count = 0;
    }
  });
});
