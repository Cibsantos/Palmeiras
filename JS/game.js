const games = document.querySelectorAll(".game");
const button = document.querySelector(".newGameBtn")
const form = document.querySelector(".newGame");




for (let i = 0; i < games.length; i++) {

    const game = games[i];

    let playerOneTd = game.querySelector(".player-one");
    let playerTwoTd = game.querySelector(".player-two");
    let scoreOneTd = game.querySelector(".scoreboard-one");
    let scoreTwoTd = game.querySelector(".scoreboard-two");
    let winnerTeam = game.querySelector(".winner");

    let playerOne = playerOneTd.textContent;
    let playerTwo = playerTwoTd.textContent;
    let scoreOne = scoreOneTd.textContent;
    let scoreTwo = scoreTwoTd.textContent;

    if (!validateScoreOne) {
        winnerTeam.innerHTML = "ERRO";
    }

    if (!validateScoreTwo) {
        winnerTeam.innerHTML = "ERRO";
    }
    if (validateScoreOne && validateScoreTwo) {
        let win = winner(playerOne, scoreOne, playerTwo, scoreTwo);
        winnerTeam.innerHTML = win
    }





};


function winner(playerOne, scoreOne, playerTwo, scoreTwo) {
    if (scoreOne > scoreTwo) {
        return playerOne;
    }
    if (scoreTwo > scoreOne) {
        return playerTwo;
    }
    if (scoreOne == scoreTwo) {
        return "Empate"
    }
}

function validateScoreOne(scoreOne) {
    if (scoreOne >= 0 && scoreOne < 10) {
        return true;
    } else {
        return false;
    }
}

function validateScoreTwo(scoreTwo) {
    if (scoreTwo >= 0 && scoreTwo < 10) {
        return true;
    } else {
        return false;
    }
}

function validateDate(date){
    let actuallyDate = Date; 
    if(date <= actuallyDate){
        return true;
    }else{
        return false;
    }
}