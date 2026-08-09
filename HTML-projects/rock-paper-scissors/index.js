let buttons = document.querySelectorAll(".buttons")
let rockButton = buttons[0];
let paperButton = buttons[1];
let scissorsButton = buttons[2];

let playerMoveBox = document.getElementById("player-move");
let comMoveBox = document.getElementById("computer-move");
let playerScoreBox = document.getElementById("player-score");
let comScoreBox = document.getElementById("computer-score");
let resultBox = document.getElementById("result")

let playerMove = "";
let comMove = "";
let playerScore = 0;
let comScore = 0;
let result = "";


buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(182, 25%, 25%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(182, 25%, 50%)"
    });
});

function comMoveMaker() {
    switch (Math.floor(Math.random() * 3)){
        case 0:
            comMove = "rock";
            break;
        case 1:
            comMove = "paper";
            break;
        case 2:
            comMove = "scissors";
            break;
    }
    comMoveBox.textContent = `Computer: ${comMove}`
}

function calculateWinner() {
    if (playerMove == comMove) {
        result = "YOU TIE";
    } else if ((playerMove == "rock" && comMove == "scissors") || 
                (playerMove == "paper" && comMove == "rock" || 
                (playerMove == "scissors" && comMove == "paper"))) {
                result = "YOU WIN";
                playerScore += 1;
                playerScoreBox.textContent = `Player score: ${playerScore}`;
    } else {
        result = "YOU LOSE";
        comScore += 1;
        comScoreBox.textContent = `Computer score: ${comScore}`;
    }
    resultBox.textContent = result;
}

buttons.forEach(button => {
    button.addEventListener("click", event => {
        switch(button){
            case buttons[0]:
                playerMove = "rock";
                break;
            case buttons[1]:
                playerMove = "paper";
                break;
            case buttons[2]:
                playerMove = "scissors";
                break;
        }
        playerMoveBox.textContent = `Player: ${playerMove}`
        comMoveMaker();
        calculateWinner();
    });
});