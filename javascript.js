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

// const GAME_COUNTER will be relevant when I change the number of rounds to be based on player input
// but for now im keeping this in
const GAME_COUNTER = 5;

let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;

const buttons = document.getElementsByClassName("choice-button");

for (const button of buttons) {
  button.addEventListener("click", playRockPaperScissors);
}








function playRockPaperScissors(event) {

  if (GAME_COUNTER == 0) return;
  if (roundCounter == GAME_COUNTER) return;

  const scoreboard = document.getElementById("scoreboard");
  const playerImg = document.getElementById("player-img");
  const computerImg = document.getElementById("player-img");

  toggleGrayscale(playerImg, computerImg);

  let playerChoice = event.target.id;
  playerImg.src = `./images/${playerChoice}-hand-icons(EDIT1-)-modified.png`;

  let computerChoice = getComputerChoice();
  computerImg.src = `images/${computerChoice}-hand-icons(EDIT1-)-modified.png`;

  if (computerChoice === playerChoice) {
    addToLog(`It's a tie! You picked ${playerChoice} and the Computer also picked ${computerChoice}`);
    announceWinner("Its a Draw!");
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
  
  roundCounter++;

  scoreboard.textContent = `${computerScore} - ${playerScore}`;

  toggleButtonGrayscale();

  if (roundCounter === GAME_COUNTER) {
    displayFinalResult();
  }
}



// Make the choice-buttons grayscaled and the player/computer icons ungrayscaled 
function toggleGrayscale(playerImg, computerImg) {
  playerImg.classList.remove("grayscale");
  computerImg.classList.remove("grayscale");
  toggleButtonGrayscale();
}

function toggleButtonGrayscale() {
  for (const button of buttons) {
    button.classList.toggle("grayscale");
  }
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

  announceWinner("Computer is choosing");

  // Resume execution/break out of loop when 1 sec has passed irl to wait 1 sec while keeping the execution syncronous
  const delayTime = 1000;
  while (true) {
    const now = Date.now();
    if (Date.now() - now >= delayTime) {
      break;
    }
  }
}

function addToLog(message) {
  const logBox = document.getElementsById("log-box");
  logBox.innerHTML += `<br>${message}`;
}

function announceWinner(message) {
  const roundWinnerBox = document.getElementById("round-winner");
  roundWinnerBox.textContent = message;
}

function displayResult(computerChoice, playerChoice) {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    addToLog("You Won! Rock beats Scissors!");
    announceWinner("Player Wins!");
    return 1;
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    addToLog("You Won! Paper beats Rock!");
    announceWinner("Player Wins!");
    return 1;
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    addToLog("You Won! Scissors beats Paper!");
    announceWinner("Player Wins!");
    return 1;
  }
  else {
    addToLog(`You Lost! You picked "${playerChoice}" Computer picked "${computerChoice}!"`);
    announceWinner("Computer Wins!");
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

function displayFinalResult(computerScore, playerScore) {
  if (computerScore > playerScore) {
    announceWinner("Computer is the Final Winner! :(");
  }
  else if (computerScore < playerScore) {
    announceWinner("Player is the Final Winner! :)");
  }
  else {
    announceWinner("Its a Draw! :|");
  }

  addToLog("Thank You for playing. Refresh the page to play again!");

  for (const button of buttons) {
    button.removeEventListener("click", playRockPaperScissors);
  }

  toggleButtonGrayscale();
}