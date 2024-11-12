function computerPlay() {
  let items = ["rock", "paper", "scissors"];
  return items[Math.floor(Math.random() * items.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  const playerSelection = document.getElementById("playerSelection").value;
  const computerSelection = computerPlay();

  const resultMessage = playRound(playerSelection, computerSelection);
  document.getElementById("result").textContent = `Player: ${playerSelection} | Computer: ${computerSelection} - ${resultMessage}`;
}
