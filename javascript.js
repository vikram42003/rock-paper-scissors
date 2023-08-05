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
playRockPaperScissors(gameCounter);





function playRockPaperScissors() {
  let computerScore = 0;
  let playerScore = 0;

  while(gameCounter > 0) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    let roundWinner = compareChoices(computerChoice, playerChoice);
    displyResult(roundWinner);

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
  do {
    let Choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (Choice != "rock" || Choice != "paper" || Choice != "scissors") {
      alert("Invalid option or a typo. Please choose between Rock, Paper and Scissors (case insensitive).")
      Choice = "wrong";
    }
  } while (Choice === "wrong")
  
  return Choice;
}

function compareChoices(computerChoice, playerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    return 1;
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    return 1;
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    return 1;
  }
  else {
    return 0;
  }
}

function displayResult(roundWinner) {
  if (roundWinner === 1) {
    console.log("Player Wins!");
  }
  else {
    console.log("Computer Wins!");
  }
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