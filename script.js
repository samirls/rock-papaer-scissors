console.log("Game Starts!");

let playerScore = 0;
let computerScore = 0;
const winLose = 5;

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  return choiceNum; 
}

document.getElementById("rockButton").addEventListener("click", playerSelectRock);
document.getElementById("paperButton").addEventListener("click", playerSelectPaper);
document.getElementById("scissorsButton").addEventListener("click", playerSelectScissors);


function playerSelectRock() {
  return playRound(0, getComputerChoice());
}

function playerSelectPaper() {
  return playRound(1, getComputerChoice());
}

function playerSelectScissors() {
  return playRound(2, getComputerChoice());
}

function win() {
    if (playerScore == 5) {
    document.getElementById("winLose").textContent = "Player Wins!!!";
    document.getElementById("winLose2").textContent = "Press F5 to restart";
    document.getElementById("buttons").textContent = "";
    document.getElementById("removeL").textContent = "";
    document.getElementById("removeL2").textContent = "";
  }
}

function lose() {
  if (computerScore == 5) {
  document.getElementById("winLose").textContent = "Player Loses!";
  document.getElementById("winLose2").textContent = "Press F5 to restart";
  document.getElementById("buttons").textContent = "";
  document.getElementById("removeL").textContent = "";
  document.getElementById("removeL2").textContent = "";
}
}


function playRound(playerSelection, computerSelection) {
  
  if (playerSelection == 0 && computerSelection == 0) {
    document.getElementById("scores").textContent = "Computer chooses Rock. That's a tie! No points given.";

  };
  if (playerSelection == 0 && computerSelection == 1) {
    computerScore++;
    document.getElementById("scores").textContent = "Computer chooses Paper. Computer gets 1 point.";
    document.getElementById("scoreMarkerC").textContent = computerScore;
    lose();


  };
  if (playerSelection == 0 && computerSelection == 2) {
    playerScore++;
    document.getElementById("scores").textContent = "Computer chooses Scissors. Player gets 1 pont.";
    document.getElementById("scoreMarkerP").textContent = playerScore;
    win();

  };
  if (playerSelection == 1 && computerSelection == 0) {
    playerScore++;
    document.getElementById("scores").textContent = "Computer chooses Rock. Player gets 1 pont.";
    document.getElementById("scoreMarkerP").textContent = playerScore;
    win();

  };
  if (playerSelection == 1 && computerSelection == 1) {
    document.getElementById("scores").textContent = "Computer chooses Paper. That's a tie! No points given.";

  };
  if (playerSelection == 1 && computerSelection == 2) {
    computerScore++;
    document.getElementById("scores").textContent = "Computer chooses Scissors. Computer gets 1 point.";
    document.getElementById("scoreMarkerC").textContent = computerScore;
    lose();


  };
  if (playerSelection == 2 && computerSelection == 0) {
    computerScore++;
    document.getElementById("scores").textContent = "Computer chooses Rock. Computer gets 1 point.";
    document.getElementById("scoreMarkerC").textContent = computerScore;
    lose();


  };
  if (playerSelection == 2 && computerSelection == 1) {
    playerScore++;
    document.getElementById("scores").textContent = "Computer chooses Paper. Player gets 1 point.";
    document.getElementById("scoreMarkerP").textContent = playerScore;
    win();

  };
  if (playerSelection == 2 && computerSelection == 2) {
    document.getElementById("scores").textContent = "Computer chooses Scissors. That's a tie! No points given.";
  };
}


console.log("Game Over!");
