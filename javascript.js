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

const GAME_COUNTER = 5;

playRockPaperScissors(GAME_COUNTER);





function playRockPaperScissors(gameCounter) {

  if (gameCounter == 0) return;

  let computerScore = 0;
  let playerScore = 0;
  let roundCounter = 1;

  

  while(roundCounter <= gameCounter) {


    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    if (computerChoice === playerChoice) {
      alert(`It's a tie! You picked ${playerChoice} and the Computer also picked ${computerChoice}`);
      continue;
    }

    let roundWinner = displayResult(computerChoice, playerChoice);

    roundWinner ? playerScore++ : computerScore++;
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
  let choice;
  do {
    choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
      alert("Invalid option or a typo. Please choose between Rock, Paper and Scissors (case insensitive).")
      choice = "wrong";
    }
  } while (choice === "wrong")
  
  return choice;
}

function displayResult(computerChoice, playerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    alert("You Won! Rock beats Scissors!");
    return 1;
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    alert("You Won! Paper beats Rock!");
    return 1;
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert("You Won! Scissors beats Paper!");
    return 1;
  }
  else {
    alert(`You Lost! You picked "${playerChoice}" Computer picked "${computerChoice}!"`);
    return 0;
  }
}

function displayFinalResult(computerScore, playerScore) {
  if (computerScore > playerScore) {
    alert("Computer is the Final Winner! :(");
  }
  else if (computerScore < playerScore) {
    alert("Player is the Final Winner! :)");
  }
  else {
    alert("Its a Draw! :|");
  }
}