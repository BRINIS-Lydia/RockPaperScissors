/*

    Copyright (C) 2023  BRINIS Lydia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    
*/


var startGame = function() {
    const playButton = document.getElementById("play-btn");
    const title = document.getElementsByClassName("title")[0]
    
    if (playButton.innerText == "Start Game !") {
        
        const playerChoice = document.getElementsByClassName("playerChoices")
        const computerChoice = document.getElementsByClassName("computerChoices")
        
        playButton.classList.add("hide");
        playButton.innerText= "Play Again !";
        title.innerText = "Choose an option : "
        playerChoice[0].classList.remove("hide")
        computerChoice[0].classList.remove("hide")
    }else{
        const rocks = document.getElementsByClassName("rock")
        const papers = document.getElementsByClassName("paper")
        const scissors = document.getElementsByClassName("scissors")
        const playerSpace = document.getElementsByClassName("playerChoices")

        rocks[1].classList.add("hide")
        papers[1].classList.add("hide")
        scissors[1].classList.add("hide")

        title.classList.remove("loss")
        title.classList.remove("win")
        title.classList.remove("tie")

        playerSpace[0].classList.remove("gameOver")
        title.innerText = "Choose an option : "
    }
    
    
} 


var computerPick = function() {
    const computerRock = document.getElementsByClassName("rock")[1]
    const computerPaper = document.getElementsByClassName("paper")[1]
    const computerScissors = document.getElementsByClassName("scissors")[1]


    pick = Math.floor(Math.random()*3);

    switch(pick) {
        case 0:
            computerRock.classList.remove("hide")
            break
        case 1:
            computerPaper.classList.remove("hide")
            break;
        case 2:
            computerScissors.classList.remove("hide")
            break;
    }
    
    return pick;

}

var compareResults = function(playerPick) {
    const title = document.getElementsByClassName("title")
    const playButton = document.getElementById("play-btn");
    const playerSpace = document.getElementsByClassName("playerChoices")
    
    plrPick = playerPick;
    cmpPick = computerPick()
    
    if (plrPick == cmpPick){
         title[0].innerText = "IT'S A TIE !"
         title[0].classList.add("tie")
    } else {
        if (((plrPick == 0) && (cmpPick == 1))|| ((plrPick == 2) && (cmpPick == 0)) || ((plrPick == 1) && (cmpPick == 2))) {
            title[0].innerText = "YOU LOST !"
            title[0].classList.add("loss")
        }else {
            title[0].innerText = "YOU WON !"
            title[0].classList.add("win")
        }
    }
    

    playButton.classList.remove("hide");
    playerSpace[0].classList.add("gameOver")
}
 