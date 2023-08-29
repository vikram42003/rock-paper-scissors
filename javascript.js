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

let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;

const buttons = document.getElementsByClassName("choice-button");

for (const button of buttons) {
  button.addEventListener("click", playRockPaperScissors);
}








function playRockPaperScissors(event) {
  const scoreboard = document.querySelector("#scoreboard > p");
  const playerImg = document.getElementById("player-img");
  const computerImg = document.getElementById("computer-img");

  toggleGrayscale(playerImg, computerImg);

  let playerChoice = event.target.id;
  playerImg.src = `./images/${playerChoice}-hand-icons(EDIT1-)-modified.png`;

  let computerChoice = getComputerChoice();
  computerImg.src = `images/${computerChoice}-hand-icons(EDIT1-)-modified.png`;

  handleWinner(playerChoice, computerChoice, playerImg, computerImg);
  roundCounter++;

  scoreboard.textContent = `${playerScore} - ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    displayFinalResult();
  }
}





// Make the choice-buttons grayscaled and the player/computer icons ungrayscaled 
function toggleGrayscale(playerImg, computerImg) {
  playerImg.classList.remove("grayscale");
  computerImg.classList.remove("grayscale");
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

function handleWinner(playerChoice, computerChoice, playerImg, computerImg) {
  if (computerChoice === playerChoice) {
    addToLog(`ROUND ${roundCounter}: It's a tie! You picked ${playerChoice} and the Computer also picked ${computerChoice}`);
    announceWinner("ITS A DRAW");
    computerScore++;
    playerScore++;
    document.body.classList.remove("red-bg", "green-bg");
  }
  else {
    // displayResult will display result in the Log and return 1 or 0
    // 1 means player wins    0 means computer wins
    const roundWinner = displayResult(computerChoice, playerChoice);
    if(roundWinner) {
      playerWinBg();
      computerImg.classList.add("grayscale");
      playerScore++;
    }
    else {
      computerWinBg();
      playerImg.classList.add("grayscale");
      computerScore++;
    }
  }
}

function addToLog(message) {
  const logBox = document.getElementById("log-box");
  logBox.innerHTML += `<br>${message}`;
}

function announceWinner(message) {
  const roundWinnerBox = document.getElementById("round-winner");
  roundWinnerBox.textContent = message;
}

function displayResult(computerChoice, playerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    addToLog(`ROUND ${roundCounter}: You Won! Rock beats Scissors!`);
    announceWinner("PLAYER WINS!");
    return 1;
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    addToLog(`ROUND ${roundCounter}: You Won! Paper beats Rock!`);
    announceWinner("PLAYER WINS!");
    return 1;
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    addToLog(`ROUND ${roundCounter}: You Won! Scissors beats Paper!`);
    announceWinner("PLAYER WINS!");
    return 1;
  }
  else {
    addToLog(`ROUND ${roundCounter}: You Lost! You picked "${playerChoice}" Computer picked "${computerChoice}!`);
    announceWinner("COMPUTER WINS!");
    return 0;
  }
}

function playerWinBg() {
  const body = document.querySelector("body");
  body.classList.remove("red-bg");
  body.classList.add("green-bg");
}

function computerWinBg() {
  const body = document.querySelector("body");
  body.classList.remove("green-bg");
  body.classList.add("red-bg");
}

function displayFinalResult() {
  if (computerScore > playerScore) {
    announceWinner("COMPUTER IS THE FINAL WINNER! :(");
  }
  else if (computerScore < playerScore) {
    announceWinner("PLAYER IS THE FINAL WINNER! :)");
  }
  else {
    announceWinner("ITS A DRAW! :|");
  }

  addToLog("Thank You for playing. Refresh the page to play again!");

  for (const button of buttons) {
    button.removeEventListener("click", playRockPaperScissors);
    button.classList.add("grayscale");
  }
}