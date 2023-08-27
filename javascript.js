/*
  Start the game as well as the round when the player makes their choice
  When player presses on Rock, Paper, Scissors then -
    0)Play a simpe Button Click animation

    1)Change the player choice sprite to their choice
      Change the ".round-winner" text content to say "Computer is choosing"

      WAIT 1 Second

    2)Update the #scoreboard.
      Change the ".round-winner" to say "Player/Computer Wins the round"
      The sprite of the loser fades to grey
      Body BG color changes to winners color
      The log displays a message like "Player Wins! Rock beats Scissors!" at the top of the log
      Push the older log messages to below the latest message and slowly fade them to be lighter

    3)The next round is initiated when the player chooses again
      Go to step 0 and repeat UNTILL either Player or Computer reaches a score of 5

    4)When Either Player or Computer reaches a score of 5 then End the game
      Do everything in step 2 except -
        Change the ".round-winner" to say "Player/Computer is the Winner!"
        The log displays a message like "Player is the Final Winner! 
        Rock beats Scissors! \n Refresh to play again!" at the top of the log
      Optionally throw confetti on the screen if player wins.
*/

"use strict";

const GAME_COUNTER = 5;

let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;

const buttons = document.getElementsByClassName("choice-button");

for (const button of buttons) {
  button.addEventListener("click", clickAnimation)
  button.addEventListener("click", playRockPaperScissors);
}





function playRockPaperScissors(event)




/*

function playRockPaperScissors(gameCounter) {

  if (gameCounter == 0) return;

  const scoreboard = document.getElementById("scoreboard");

  while(roundCounter <= gameCounter) {
    scoreboard.textContent = `${computerScore} - ${playerScore}`;

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

*/