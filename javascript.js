//  First prompt player as for how many rounds to play
//  Start a new game
//  Computer makes its choice and informs the player
//  player makes their choice
//  compare the choices according to the normal rock paper scissors rules
//  Display the result ranging from win lose draw
//  Keep track of each win or loss
//  Go to the next game
//  Display the final result after all rounds are played

"use strict";

let gameCounter = Number(prompt("How many rounds of the game do you want to play", ""))

function playRockPaperScissors() {
  let computerScore = 0;
  let playerScore = 0;

  while(gameCounter > 0) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let roundWinner = compareChoices(computerChoice, playerChoice);
    displyResult();

    roundWinner ? playerScore++ : computerScore++;

    gameCounter--;
  }
  

  displayFinalResult(computerScore, playerScore);
}




function getComputerChoice() {
  let Choice = Math.floor(Math.random() * 3);
  if (Choice == 0) {
    return "rock";
  } 
  else if (Choice == 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let Choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  return Choice;
}

function displayFinalResult(computerScore, playerScore) {
  if (computerScore > playerScore) {
    console.log("Computer is the Final Winner! :(");
  }
  else if (computerScore < playerScore) {
    console.log("Player is the Final Winner! :)");
  }
  else {
    console.log("Its a Draw! :|");
  }
}