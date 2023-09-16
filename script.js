const choices = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  // Generate a random index within the length of the array
  const randomIndex = Math.floor(Math.random() * choices.length);

  // Use the random index to get the random item from the array
  const computerChoice = choices[randomIndex];
  return computerChoice;
};

const playRound = function (playerSelection, computerSelection) {
  playerChoice = playerSelection.toLowerCase();

  if (playerChoice === computerSelection) return "Draw";
  if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  )
    return `You Lose! ${computerSelection
      .charAt(0)
      .toUpperCase()}${computerSelection.slice(1)} beats ${playerChoice
      .charAt(0)
      .toUpperCase()}${playerChoice.slice(1)}`;
  if (
    (playerChoice === "paper" && computerSelection === "rock") ||
    (playerChoice === "scissors" && computerSelection === "paper") ||
    (playerChoice === "rock" && computerSelection === "scissors")
  )
    return `You Win! ${playerChoice
      .charAt(0)
      .toUpperCase()}${playerChoice.slice(1)} beats ${computerSelection
      .charAt(0)
      .toUpperCase()}${computerSelection.slice(1)}`;
};
