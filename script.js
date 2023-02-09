
function getComputerChoice() {
  let n = Math.floor(Math.random() * 3);
  let computerSelection;
  // selects rock, paper, or scissor by randomly picking 0-2
  if (n === 0) {
    computerSelection = "Rock";
  } else if (n === 1) {
    computerSelection = "Paper";
  } else if (n === 2) {
    computerSelection = "Scissor";
  } else {
    console.log("Error"); 
  }

  computerSelection = computerSelection.toUpperCase();
  // returns the computer choices
  return computerSelection;
}

function getPlayerChoice() {
  // asks for and returns the players choice
  let playerSelection = prompt("Please enter Rock, Paper, or Scissor");

  playerSelection = playerSelection.toUpperCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  let result;
  
  if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    result = 0;
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    result = 1;
    console.log("You Win! Rock beats Scissor");
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    result = 1;
    console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    result = 0;
    console.log("You Lose! Scissor beats Paper");
  } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
    result = 1;
    console.log("You Win! Scissor beats Paper");
  } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
    result = 0;
    console.log("You Lose! Rock beats Scissor");
  //} else {
    //result = "Tie"
  }

  return result;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(computerSelection);
playRound(playerSelection, computerSelection);

console.log(playRound(playerSelection, computerSelection));