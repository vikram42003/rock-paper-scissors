//  First prompt user as for how many rounds to play
//  Start a new game
//  Computer makes its choice and informs the user
//  User makes their choice
//  compare the choices according to the normal rock paper scissors rules
//  Display the result ranging from win lose draw
//  Keep track of each win or loss
//  Go to the next game
//  Display the final result after all rounds are played

"use strict";

let gameCounter = Number(prompt("How many rounds of the game do you want to play", ""))

function playRockPaperScissors() {
  let computerScore = 0;
  let userScore = 0;

  while(gameCounter > 0) {
    letComputerChoose();
    letUserChoose();
    compareChoices();
    displayResult();
    gameCounter--;
  }
  
  displayFinalResult();
}