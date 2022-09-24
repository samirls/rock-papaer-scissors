console.log("Game Starts!");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  return choiceNum; 
}

function playerChoice() {
  let playerCommand = prompt("Choose and write below: Rock, Paper, or Scissors?").toLowerCase();
  if (playerCommand === "rock") {
      return 0;
  }
  if (playerCommand === "paper") {
      return 1;
  }
  if (playerCommand === "scissors") {
      return 2;
  }
  else {
    alert("Write just rock, paper or scissors. Whatch out for misspelling");
  }
  return playerChoice();
}

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection == 0 && computerSelection == 0) {
    playerScore++;
    computerScore++;
    return "Computer chooses Rock. That's a tie! Both players get 1 point.";

  };
  if (playerSelection == 0 && computerSelection == 1) {
    computerScore++;
    return "Computer chooses Paper. Computer gets 1 point."; 

  };
  if (playerSelection == 0 && computerSelection == 2) {
    playerScore++;
    return "Computer chooses Scissors. Player gets 1 pont.";

  };
  if (playerSelection == 1 && computerSelection == 0) {
    playerScore++;
    return "Computer chooses Rock. Player gets 1 pont.";

  };
  if (playerSelection == 1 && computerSelection == 1) {
    playerScore++;
    computerScore++;
    return "Computer chooses Paper. That's a tie! Both players get 1 point.";

  };
  if (playerSelection == 1 && computerSelection == 2) {
    computerScore++;
    return "Computer chooses Scissors. Computer gets 1 point.";

  };
  if (playerSelection == 2 && computerSelection == 0) {
    computerScore++;
    return "Computer chooses Rock. Computer gets 1 point.";

  };
  if (playerSelection == 2 && computerSelection == 1) {
    playerScore++;
    return "Computer chooses Paper. Player gets 1 point.";

  };
  if (playerSelection == 2 && computerSelection == 2) {
    playerScore++;
    computerScore++;
    return "Computer chooses Scissors. That's a tie! Both players get 1 point.";
  };
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log(`Player wins! You scored ${playerScore} points!`);
    console.log(`Computer scored ${computerScore} points.`);
  }
  if (playerScore < computerScore) {
    console.log(`You lose! You scored ${playerScore} points!`);
    console.log(`Computer scored ${computerScore} points.`);
  }
  if (playerScore == computerScore) {
    console.log(`That's a tie! You and the computer scored ${computerScore}.`);
  }

}

game();


console.log("Game Over!");

//11:53