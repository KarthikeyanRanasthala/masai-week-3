var bodySelect = document.querySelector("body");
var startBtn = document.querySelector("button");

var whiteChessPieces = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖", "♙"];
var blackChessPieces = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", "♟"];

var pieces = [];
var temp = " ";

var gameName = document.createElement("h1");
gameName.innerHTML = "Chess";
bodySelect.appendChild(gameName);

var startScreen = document.createElement("div");
startScreen.setAttribute("id", "start-screen");
bodySelect.appendChild(startScreen);

var player = ["First", "Second"];
for(i = 0; i < 2; i++) {
    var nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", "Enter " + player[i] + " Player's Name");
    startScreen.appendChild(nameInput);
}

var startButton = document.createElement("a");
startButton.innerHTML = "Start";
startButton.addEventListener("click", start);
startScreen.appendChild(startButton);

var footer = document.createElement("footer");
footer.innerHTML = "Made By Karthikeyan";

function start() {  
    var nameInputs = document.querySelectorAll("input");

    bodySelect.removeChild(gameName);

    var gameScreen = document.createElement("div");
    gameScreen.setAttribute("id", "game-screen");
    bodySelect.appendChild(gameScreen);

    var firstPlayerName = document.createElement("p");
    firstPlayerName.innerHTML = nameInputs[0].value;
    firstPlayerName.setAttribute("id", "player-1")
    gameScreen.appendChild(firstPlayerName);

    var firstPlayerPieces = document.createElement("p");
    firstPlayerPieces.setAttribute("id", "player-1-pieces");
    gameScreen.appendChild(firstPlayerPieces);

    var mainBoard = document.createElement("div");
    mainBoard.setAttribute("id", "chess-grid");
    gameScreen.appendChild(mainBoard);

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = blackChessPieces[i];
        clickId = "play(" + i + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 != 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = blackChessPieces[8];
        clickId = "play(" + (i + 8) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 == 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }
    
    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = " ";
        clickId = "play(" + (i + 16) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 != 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = " ";
        clickId = "play(" + (i + 24) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 == 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = " ";
        clickId = "play(" + (i + 32) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 != 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = " ";
        clickId = "play(" + (i + 40) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 == 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = whiteChessPieces[8];
        clickId = "play(" + (i + 48) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 != 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    for(i = 0; i < 8; i++) {
        var div = document.createElement("div");
        div.innerHTML = whiteChessPieces[i];
        clickId = "play(" + (i + 56) + ")";
        div.setAttribute("onclick", clickId);
        if(i % 2 == 0) {
            div.setAttribute("class", "cell-bg");
        }
        mainBoard.appendChild(div);
    }

    var blocks = document.querySelectorAll("#chess-grid div");
    for(i = 0; i < blocks.length; i++) {
        pieces[i] = blocks[i].innerHTML;
    }

    divs = document.querySelectorAll("div");
    bodySelect.removeChild(divs[0]);

    var secondPlayerPieces = document.createElement("p");
    secondPlayerPieces.setAttribute("id", "player-2-pieces");
    gameScreen.appendChild(secondPlayerPieces);

    var secondPlayerName = document.createElement("p");
    secondPlayerName.innerHTML = nameInputs[1].value;
    secondPlayerName.setAttribute("id", "player-2")
    gameScreen.appendChild(secondPlayerName);
}


function play(pos) {
    var blocks = document.querySelectorAll("#chess-grid div");
    
    if(temp == " ") {
        for(i = 0; i < whiteChessPieces.length; i++) {
            if(pieces[pos] == whiteChessPieces[i]) {
                temp = whiteChessPieces[i];
                pieces[pos] = " ";
            }
            else if(pieces[pos] == blackChessPieces[i]) {
                temp = blackChessPieces[i];
                pieces[pos] = " ";
            }
        }
    }

    else if(temp != " ") {
        for(i = 0; i < whiteChessPieces.length; i++) {
            if(pieces[pos] == whiteChessPieces[i]) {
                for(i = 0; i < blackChessPieces.length; i++) {
                    if(temp == blackChessPieces[i]) {
                        var playerOneTakedowns = document.getElementById("player-2-pieces");
                        playerOneTakedowns.innerHTML += pieces[pos];
                    }
                }
            }

            else if(pieces[pos] == blackChessPieces[i]) {
                for(i = 0; i < whiteChessPieces.length; i++) {
                    if(temp == whiteChessPieces[i]) {
                        var playerTwoTakedowns = document.getElementById("player-1-pieces");
                        playerTwoTakedowns.innerHTML += pieces[pos];
                    }
                }
            }
        }
        pieces[pos] = temp;
        temp = " ";
    }

    for(i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = pieces[i];
    }   
}