/*
GAME RULES:
- The game has 2 players, playing in rounds - player1,player2
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var scores,round_score,active_player,new_game;
init();
document.querySelector(".dice").style.display = "none";
document.querySelector(".btn-roll").addEventListener('click',function(){
    if (new_game) {
        // generate a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        // display dice
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = "Block";
        diceDom.src = "./assets/dice-" + dice + ".png";
        // update current score if it is not equal to 1
        if (dice != 1) {
            round_score += dice;
            document.getElementById("current-" + active_player).innerHTML = round_score;
        } else {
            next_player()
        }
    }
});

 document.querySelector(".btn-hold").addEventListener('click',function () {
     if (new_game) {
         scores[active_player] += round_score;
         document.getElementById("score-" + active_player).innerHTML = scores[active_player];
     }
     if (scores[active_player] >= 20){
         document.getElementById("name-"+active_player).innerHTML = "Winner";
         var diceDom = document.querySelector(".dice");
         diceDom.style.display = "none";
         document.querySelector(".player-"+active_player+"-panel").classList.add("winner");
         document.querySelector(".player-"+active_player+"-panel").classList.remove("active");
         new_game = false;
     }
     else{
         next_player();
     }


 });
 document.querySelector(".btn-new").addEventListener("click", init);

function init(){
    new_game = true;
    active_player = 0;
    scores = [0,0];
    round_score = 0;
    document.querySelector(".dice").style.display = "none";
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.getElementById("name-0").innerHTML = "Player 1";
    document.getElementById("name-1").innerHTML = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");



}
function next_player() {
    round_score = 0;
    active_player === 0 ? active_player = 1 : active_player = 0;
    document.getElementById("current-0").innerHTML = 0;
    document.getElementById("current-1").innerHTML = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

}
//document.querySelector('#current-'+active_player).innerHTML = dice;