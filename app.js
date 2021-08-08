function computerPlay() {
  let items = ["rock", "paper", "scissors"];
  let item = items[Math.floor(Math.random() * items.length)];
  return item;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()){
        console.log("This is a tie");
    } 
}

//let playerSelection = document.querySelector(".playerSelection");
let playerSelection = "rock";
let computerSelection = computerPlay();    

console.log(playerSelection);
console.log(computerSelection);

playRound(playerSelection, computerSelection);