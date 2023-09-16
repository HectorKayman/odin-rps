// Function to get computer's choice
const getComputerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
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
  playerChoice = playerSelection.toLowerCase();

  if (playerChoice === computerSelection) return "Its a Draw.";
  if (
    (playerChoice === "rock" && computerSelection === "paper") ||
    (playerChoice === "paper" && computerSelection === "scissors") ||
    (playerChoice === "scissors" && computerSelection === "rock")
  )
    return `You Lose! ${capitalizeChoice(
      computerSelection
    )} beats ${capitalizeChoice(playerChoice)}`;
  else
    return `You Win! ${capitalizeChoice(playerChoice)} beats ${capitalizeChoice(
      computerSelection
    )}`;
};

// Function to play 5 rounds of RPS
const game = function () {
  let finalScore = 0;
  for (let i = 0; i < 5; i++) {
    const userSelection = prompt(
      "What Do You Choose? Rock, Paper or Scissors."
    );
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
