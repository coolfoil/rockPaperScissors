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
  // returns the computer choice
  console.log(computerSelection); 
  return computerSelection;
}

function getPlayerChoice() {
  // asks for and returns the players choice
  let playerSelection = prompt("Please enter Rock, Paper, or Scissor");
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {

}

getComputerChoice();
getPlayerChoice();