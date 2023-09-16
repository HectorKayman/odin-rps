"use strict";

const rpsGame = function () {
  const choices = ["rock", "paper", "scissors"];
  // Function to get computer's choice
  const getComputerChoice = function () {
    // Generate a random index within the length of the array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Use the random index to get the random item from the array
    const computerChoice = choices[randomIndex];
    return computerChoice;
  };

  // Helper function to capitalize the first letter
  const capitalizeChoice = function (str) {
    return str.length === 0
      ? str
      : `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  };

  // Function to play one round of RPS
  const playRound = function (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Its a Draw.";
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    )
      return `You Lose! ${capitalizeChoice(
        computerSelection
      )} beats ${capitalizeChoice(playerSelection)}`;
    else
      return `You Win! ${capitalizeChoice(
        playerSelection
      )} beats ${capitalizeChoice(computerSelection)}`;
  };

  // Helper (Recursive) function to get correct user input
  const promptUser = function () {
    const userInput = prompt(
      "What Do You Choose? Rock, Paper or Scissors."
    ).toLowerCase();
    if (!choices.includes(userInput)) return promptUser();
    else return userInput;
  };

  // Function to play 5 rounds of RPS
  const game = function () {
    let finalScore = 0;
    for (let i = 0; i < 5; i++) {
      const userSelection = promptUser();
      const winningPlayer = playRound(userSelection, getComputerChoice());
      const roundWinner = winningPlayer.substring(0, 7);
      console.log(winningPlayer);
      if (roundWinner === "You Win") finalScore++;
    }
    return `You ${
      finalScore >= 3 ? "Won" : "Lost"
    } the Game! The final score is ${finalScore}/5`;
  };

  const playGame = game();
  console.log(playGame);
};

rpsGame();
