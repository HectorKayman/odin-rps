const choices = ["rock", "paper", "scissors"];

const getComputerChoice = function () {
  // Generate a random index within the length of the array
  const randomIndex = Math.floor(Math.random() * choices.length);

  // Use the random index to get the random item from the array
  const computerChoice = choices[randomIndex];
  return computerChoice;
};
