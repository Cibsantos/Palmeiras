button.addEventListener("click", function(event){
    event.preventDefault();

    const game = valuesForm(form);

    const trGame = trCreat(game);
    const error = validation(game);

    if(error.length > 0 ){
        displayErro(error);
        return;
    }

    const table = document.querySelector(".tableGames");
    table.appendChild(trGame);
    form.reset();

    let ul = document.querySelector(".error");
    ul.innerHTML = "";



})

function valuesForm(form){
    const game = {
        playerOne: form.playerOne.value,
        playerTwo: form.playerTwo.value,
        scoreOne: form.scoreOne.value,
        scoreTwo: form.scoreTwo.value,
        winner: winner(form.playerOne.value, form.scoreOne.value, form.playerTwo.value, form.scoreTwo.value),
        date: form.date.value
    }

    return game;
}

function tdCreat(info, classe){
    let td = document.createElement("td");
    td.textContent = info; 
    td.classList.add(classe); 
    return td;
}

function trCreat(game){
    const trGame = document.createElement("tr");
    trGame.classList.add("game"); 

    trGame.appendChild(tdCreat(game.playerOne, "playerOone"));
    trGame.appendChild(tdCreat(game.scoreOne, "scoreboardOne"));
    trGame.appendChild(tdCreat(game.playerTwo, "playeTwo"));
    trGame.appendChild(tdCreat(game.scoreTwo, "scoreboardTwo"));
    trGame.appendChild(tdCreat(game.winner, "winner"));
    trGame.appendChild(tdCreat(game.date, "date"));

    return trGame;

}

function validation(game){
    let error = []; 

    if(!validateScoreOne)error.push("Placar 1 é inválido"); 

    if(!validateScoreTwo)error.push("Placar 2 é Inválido");

    if(game.playerOne.length == 0 )error.push("Informe o Time da Casa");

    if(game.playerTwo.length == 0 )error.push("Informe o Time Visitante");

    if(!validateDate)error.push("Informe uma Data Válida");

    return error;
}

function displayErro(error){
    let ul = document.querySelector(".error");
    ul.innerHTML = "";

    error.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}