let pcScore = 0;
let playerScore = 0;

function checkVictory() {

if (pcScore === 5) {
    document.getElementById("result5").innerHTML = "Computer Wins!";
}

else if (playerScore === 5) {
    document.getElementById("result5").innerHTML = "Player Wins!";
}
}

function rockPaperScissors() {
    let pcChoice = Math.floor(Math.random() * 3 + 1);
    if (pcChoice === 1) {
        pcScore++;
        playerScore++;
        console.log("draw");
        document.getElementById("result1").innerHTML = "Draw!";
        checkVictory()
    }
    if (pcChoice === 2) {
        pcScore++;
        console.log("lose");
        document.getElementById("result1").innerHTML = "Computer Wins!";
        checkVictory()
    }
    if (pcChoice === 3) {
        playerScore++;
        console.log("win");
        document.getElementById("result5").innerHTML = "Player Wins!";
        checkVictory()
    }

}




/*
PSEUDOCODE
1- make buttons to user to click with rock, paper, scissors;
2- the click should run a function that randomize a choice for the PC;
3- same (or not) function should compare the player and PC choices and give
a result;
4- the result should stay in variables to calculate the score and compare them;
5- the first score to reach 5 display the winning message and reset scores;
*/