// this is the board flattened and filled with some values.
var origBoard = [0,1,2,3,4,5,6,7,8];
// Score counter
var tieCount = 0;
var lossCount = 0;
// finish game
function finishGame(){
  if ( 
  (origBoard[0] == "X" && origBoard[1] == "X" && origBoard[2] =="X") ||
  (origBoard[3] == "X" && origBoard[4] == "X" && origBoard[5] =="X") ||
  (origBoard[6] == "X" && origBoard[7] == "X" && origBoard[8] =="X") ||
  (origBoard[0] == "X" && origBoard[3] == "X" && origBoard[6] =="X") ||
  (origBoard[1] == "X" && origBoard[4] == "X" && origBoard[7] =="X") ||
  (origBoard[2] == "X" && origBoard[5] == "X" && origBoard[8] =="X") ||
  (origBoard[0] == "X" && origBoard[4] == "X" && origBoard[8] =="X") ||
  (origBoard[2] == "X" && origBoard[4] == "X" && origBoard[6] =="X")  ){
    alert('Game over! "X" is the winner!');
    reset();
    lossCount++;
    document.getElementById("gameHeader").classList.add('scoreCount');
    document.getElementById("computerWin").innerHTML = "Computer: " + lossCount;
    document.getElementById("scoreBoard").classList.remove('scoreCount');
    if (huPlayer=="O"){btnOClick()};
  };
  
  if ( 
  (origBoard[0] == "O" && origBoard[1] == "O" && origBoard[2] =="O") ||
  (origBoard[3] == "O" && origBoard[4] == "O" && origBoard[5] =="O") ||
  (origBoard[6] == "O" && origBoard[7] == "O" && origBoard[8] =="O") ||
  (origBoard[0] == "O" && origBoard[3] == "O" && origBoard[6] =="O") ||
  (origBoard[1] == "O" && origBoard[4] == "O" && origBoard[7] =="O") ||
  (origBoard[2] == "O" && origBoard[5] == "O" && origBoard[8] =="O") ||
  (origBoard[0] == "O" && origBoard[4] == "O" && origBoard[8] =="O") ||
  (origBoard[2] == "O" && origBoard[4] == "O" && origBoard[6] =="O")  ){
    alert('Game over! "O" is the winner!');
    reset();
    lossCount++
    document.getElementById("gameHeader").classList.add('scoreCount');
    document.getElementById("computerWin").innerHTML = "Computer: " + lossCount;
    document.getElementById("scoreBoard").classList.remove('scoreCount');
    if (huPlayer=="O"){btnOClick()};
    
  };
  
   if (origBoard[0] != 0 && origBoard[1] != 1 && origBoard[2] !=2
    && origBoard[3] != 3 && origBoard[4] != 4 && origBoard[5] !=5
    && origBoard[6] != 6 && origBoard[7] != 7 && origBoard[8] !=8){
    alert("Game over! Looks like a tie!");
    reset();
    tieCount++;
    document.getElementById("gameHeader").classList.add('scoreCount');
    document.getElementById("tieGame").innerHTML = "Tie: " + tieCount;
    document.getElementById("scoreBoard").classList.remove('scoreCount');
    if (huPlayer=="O"){btnOClick()};
   };
  
  return;
 };
//rendering board
function renderFunction(){
  if (origBoard[0] != 0)
      {document.getElementById("board0").innerHTML = origBoard[0]; 
      document.getElementById("board0").classList.add('btn'+origBoard[0])}
    else document.getElementById("board0").innerHTML = " ";
  
  if (origBoard[1] != 1)
      {document.getElementById("board1").innerHTML = origBoard[1]; 
      document.getElementById("board1").classList.add('btn'+origBoard[1])}
    else document.getElementById("board1").innerHTML = " ";
  
  if (origBoard[2] != 2)
      {document.getElementById("board2").innerHTML = origBoard[2]; 
      document.getElementById("board2").classList.add('btn'+origBoard[2])}
    else document.getElementById("board2").innerHTML = " ";
  
  if (origBoard[3] != 3)
      {document.getElementById("board3").innerHTML = origBoard[3]; 
      document.getElementById("board3").classList.add('btn'+origBoard[3])}
    else document.getElementById("board3").innerHTML = " ";
  
  if (origBoard[4] != 4)
      {document.getElementById("board4").innerHTML = origBoard[4]; 
      document.getElementById("board4").classList.add('btn'+origBoard[4])}
    else document.getElementById("board4").innerHTML = " ";
  
  if (origBoard[5] != 5)
      {document.getElementById("board5").innerHTML = origBoard[5]; 
      document.getElementById("board5").classList.add('btn'+origBoard[5])}
    else document.getElementById("board5").innerHTML = " ";
  
  if (origBoard[6] != 6)
      {document.getElementById("board6").innerHTML = origBoard[6]; 
      document.getElementById("board6").classList.add('btn'+origBoard[6])}
    else document.getElementById("board6").innerHTML = " ";
  
  if (origBoard[7] != 7)
      {document.getElementById("board7").innerHTML = origBoard[7]; 
      document.getElementById("board7").classList.add('btn'+origBoard[7])}
    else document.getElementById("board7").innerHTML = " ";
  
  if (origBoard[8] != 8)
      {document.getElementById("board8").innerHTML = origBoard[8]; 
      document.getElementById("board8").classList.add('btn'+origBoard[8])}
    else document.getElementById("board8").innerHTML = " ";
finishGame();
}
// human
var huPlayer = "X";
// ai
var aiPlayer = "O";
// reset board
function reset(){ 
  origBoard = [0,1,2,3,4,5,6,7,8];
  renderFunction();
  document.getElementById("board0").classList.remove('btnX');
  document.getElementById("board0").classList.remove('btnO');
  document.getElementById("board1").classList.remove('btnX');
  document.getElementById("board1").classList.remove('btnO');
  document.getElementById("board2").classList.remove('btnX');
  document.getElementById("board2").classList.remove('btnO');
  document.getElementById("board3").classList.remove('btnX');
  document.getElementById("board3").classList.remove('btnO');
  document.getElementById("board4").classList.remove('btnX');
  document.getElementById("board4").classList.remove('btnO');
  document.getElementById("board5").classList.remove('btnX');
  document.getElementById("board5").classList.remove('btnO');
  document.getElementById("board6").classList.remove('btnX');
  document.getElementById("board6").classList.remove('btnO');
  document.getElementById("board7").classList.remove('btnX');
  document.getElementById("board7").classList.remove('btnO');
  document.getElementById("board8").classList.remove('btnX');
  document.getElementById("board8").classList.remove('btnO');
 
  document.getElementById("gameHeader").classList.remove('hideIt');
};
//reset button
function resetClick(){
  reset();
  document.getElementById("gameHeader").classList.remove('scoreCount');
  document.getElementById("scoreBoard").classList.add('scoreCount');
};
// keep track of function calls
var fc = 0;
// finding the ultimate play on the game that favors the computer
var bestSpot = minimax(origBoard, aiPlayer);
//loging the results
//document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
//document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
// the main minimax function
function minimax(newBoard, player){ 
  //keep track of function calls;
  fc++;
  //available spots
  var availSpots = emptyIndexies(newBoard);
  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (winning(newBoard, huPlayer)){
     return {score:-10};
  }
	else if (winning(newBoard, aiPlayer)){
    return {score:10};
	}
  else if (availSpots.length === 0){
  	return {score:0};
  }
// an array to collect all the objects
  var moves = [];
  // loop through available spots
  for (var i = 0; i < availSpots.length; i++){
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    var move = {};
  	move.index = newBoard[availSpots[i]];
    // set the empty spot to the current player
    newBoard[availSpots[i]] = player;
    //if collect the score resulted from calling minimax on the opponent of the current player
    if (player == aiPlayer){
      var result = minimax(newBoard, huPlayer);
      move.score = result.score;
    }
    else{
      var result = minimax(newBoard, aiPlayer);
      move.score = result.score;
    }
    //reset the spot to empty
    newBoard[availSpots[i]] = move.index;
    // push the object to the array
    moves.push(move);
  }
// if it is the computer's turn loop over the moves and choose the move with the highest score
  var bestMove;
  if(player === aiPlayer){
    var bestScore = -10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score > bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }else{
// else loop over the moves and choose the move with the lowest score
    var bestScore = 10000;
    for(var i = 0; i < moves.length; i++){
      if(moves[i].score < bestScore){
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }
// return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}
// returns the available spots on the board
function emptyIndexies(board){
  return  board.filter(s => s != "O" && s != "X");
}
// winning combinations using the board indexies for instace the first win could be 3 xes in a row
function winning(board, player){
 if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
        ) {
        return true;
    } else {
        return false;
    }
}
// button to swap player
function btnOClick(){
  reset();
huPlayer = "O";
aiPlayer = "X";
  origBoard[Math.floor( Math.random() * 9 )] = "X";
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
};
function btnXClick(){
    reset();
huPlayer = "X";
aiPlayer = "O";
  document.getElementById("gameHeader").classList.add('hideIt');
};

function tlClick(){
  if (origBoard[0] != 0) {return};
  origBoard[0] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function tmClick(){
  if (origBoard[1] != 1) {return};
  origBoard[1] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function trClick(){
  if (origBoard[2] != 2) {return};
  origBoard[2] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function mlClick(){
  if (origBoard[3] != 3) {return};
  origBoard[3] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function mmClick(){
  if (origBoard[4] != 4) {return};
  origBoard[4] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function mrClick(){
  if (origBoard[5] != 5) {return};
  origBoard[5] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }
 
function blClick(){
  if (origBoard[6] != 6) {return};
  origBoard[6] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function bmClick(){
  if (origBoard[7] != 7) {return};
  origBoard[7] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
  }

function brClick(){
  if (origBoard[8] != 8) {return};
  origBoard[8] = huPlayer;
  var bestSpot = minimax(origBoard, aiPlayer);
  document.getElementById("bestMoveLabel").innerHTML =("Index: " + bestSpot.index);
  document.getElementById("turnCounter").innerHTML =("function calls: " + fc);
  origBoard[bestSpot.index] = aiPlayer;
 renderFunction();
  document.getElementById("gameHeader").classList.add('hideIt');
}

//////////////////////////////////////////////////////////////////////////////////////////////////
/* NEWER OLD CODE!! BELOW

var playerShape = "X";
var currentBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var result = 0;

function debugBoard(){
  document.getElementById("turnCounter").innerHTML = currentBoard; 
  document.getElementById("tl").innerHTML = currentBoard[0];
  document.getElementById("tm").innerHTML = currentBoard[1];
  document.getElementById("tr").innerHTML = currentBoard[2];
  document.getElementById("ml").innerHTML = currentBoard[3];
  document.getElementById("mm").innerHTML = currentBoard[4];
  document.getElementById("mr").innerHTML = currentBoard[5];
  document.getElementById("bl").innerHTML = currentBoard[6];
  document.getElementById("bm").innerHTML = currentBoard[7];
  document.getElementById("br").innerHTML = currentBoard[8];
}

function reset(){
currentBoard = [0,1,2,3,4,5,6,7,8];
  document.getElementById("turnCounter").innerHTML = currentBoard;
  document.getElementById("tl").innerHTML = " ";
  document.getElementById("tm").innerHTML = " ";
  document.getElementById("tr").innerHTML = " ";
  document.getElementById("ml").innerHTML = " ";
  document.getElementById("mm").innerHTML = " ";
  document.getElementById("mr").innerHTML = " ";
  document.getElementById("bl").innerHTML = " ";
  document.getElementById("bm").innerHTML = " ";
  document.getElementById("br").innerHTML = " ";
};

function getStatus(){
  if ( 
  (currentBoard[0] == "P" && currentBoard[1] == "P" && currentBoard[2] =="P") ||
  (currentBoard[3] == "P" && currentBoard[4] == "P" && currentBoard[5] =="P") ||
  (currentBoard[6] == "P" && currentBoard[7] == "P" && currentBoard[8] =="P") ||
  (currentBoard[0] == "P" && currentBoard[3] == "P" && currentBoard[6] =="P") ||
  (currentBoard[1] == "P" && currentBoard[4] == "P" && currentBoard[7] =="P") ||
  (currentBoard[2] == "P" && currentBoard[5] == "P" && currentBoard[8] =="P") ||
  (currentBoard[0] == "P" && currentBoard[4] == "P" && currentBoard[8] =="P") ||
  (currentBoard[2] == "P" && currentBoard[4] == "P" && currentBoard[6] =="P")  ){
    result = result-1; return};
  
  if ( 
  (currentBoard[0] == "C" && currentBoard[1] == "C" && currentBoard[2] =="C") ||
  (currentBoard[3] == "C" && currentBoard[4] == "C" && currentBoard[5] =="C") ||
  (currentBoard[6] == "C" && currentBoard[7] == "C" && currentBoard[8] =="C") ||
  (currentBoard[0] == "C" && currentBoard[3] == "C" && currentBoard[6] =="C") ||
  (currentBoard[1] == "C" && currentBoard[4] == "C" && currentBoard[7] =="C") ||
  (currentBoard[2] == "C" && currentBoard[5] == "C" && currentBoard[8] =="C") ||
  (currentBoard[0] == "C" && currentBoard[4] == "C" && currentBoard[8] =="C") ||
  (currentBoard[2] == "C" && currentBoard[4] == "C" && currentBoard[6] =="C")  ){
    result = result+1; return};
  
  return;
 };

function findBest(){
  var tempBoard = currentBoard;
  result = 0;
  for (i=0; i<currentBoard.length; i++){
    if (currentBoard[i] == " "){
      currentBoard[i] = "C"; getStatus();
                                 }; 
  }

};

function btnXClick(){
  playerShape = "X";
  reset();
};

function btnOClick(){
  playerShape = "O";
  reset();
  currentBoard[8] = "X"
  document.getElementById("br").innerHTML = currentBoard[8];
  currentBoard[8] = "C";
};

function tlClick(){
  if (currentBoard[0] != " "){return}
  if (playerShape == "O") {currentBoard[0] = "O"};
  if (playerShape == "X") {currentBoard[0] = "X"};
  document.getElementById("tl").innerHTML = currentBoard[0];
  currentBoard[0] = "P";
  }



*////////////////////////////NEW OLD CODE ABOVE!!!






/* OLD CODE BELOW

var tl = "";
var tm = "";
var tr = "";
var ml = "";
var mm = "";
var mr = "";
var bl = "";
var bm = "";
var br = "";
var myTurn = 0;

function reset(){
tl = "";
tm = "";
tr = "";
ml = "";
mm = "";
mr = "";
bl = "";
bm = "";
br = "";
myTurn = 0;
document.getElementById("turnCounter").innerHTML = "Turn " + myTurn;  
update();
}

function btnOClick(){
  playerShape = "O";
  reset();
  enemyTurnX();
  update();
  }

function btnXClick(){
  playerShape = "X";
  reset();
}

function checkWin(){
myTurn = myTurn + 1;
document.getElementById("turnCounter").innerHTML = "Turn " + myTurn;
}

function update(){
if (tl == "O"){document.getElementById("tl").innerHTML = "O"}
if (tl == "X"){document.getElementById("tl").innerHTML = "X"}
if (tl == ""){document.getElementById("tl").innerHTML = ""}  

if (tm == "O"){document.getElementById("tm").innerHTML = "O"}
if (tm == "X"){document.getElementById("tm").innerHTML = "X"}
if (tm == ""){document.getElementById("tm").innerHTML = ""}
  
if (tr == "O"){document.getElementById("tr").innerHTML = "O"}
if (tr == "X"){document.getElementById("tr").innerHTML = "X"}
if (tr == ""){document.getElementById("tr").innerHTML = ""}
  
  
if (ml == "O"){document.getElementById("ml").innerHTML = "O"}
if (ml == "X"){document.getElementById("ml").innerHTML = "X"}
if (ml == ""){document.getElementById("ml").innerHTML = ""}
  
if (mm == "O"){document.getElementById("mm").innerHTML = "O"}
if (mm == "X"){document.getElementById("mm").innerHTML = "X"}
if (mm == ""){document.getElementById("mm").innerHTML = ""}
  
if (mr == "O"){document.getElementById("mr").innerHTML = "O"}
if (mr == "X"){document.getElementById("mr").innerHTML = "X"}
if (mr == ""){document.getElementById("mr").innerHTML = ""}
  
  
if (bl == "O"){document.getElementById("bl").innerHTML = "O"}
if (bl == "X"){document.getElementById("bl").innerHTML = "X"}
if (bl == ""){document.getElementById("bl").innerHTML = ""}

if (bm == "O"){document.getElementById("bm").innerHTML = "O"}
if (bm == "X"){document.getElementById("bm").innerHTML = "X"}
if (bm == ""){document.getElementById("bm").innerHTML = ""}
  
if (br == "O"){document.getElementById("br").innerHTML = "O"}
if (br == "X"){document.getElementById("br").innerHTML = "X"}
if (br == ""){document.getElementById("br").innerHTML = ""}
}

function enemyTurnX(){
if (myTurn == 0) {br = "X"; return}
if (tr !="O" && mr != "O" && myTurn == 1){tr = "X"; return}
if (bl !="O" && bm != "O" && myTurn == 1){bl = "X"; return} 
 
if (br == "X" && tr == "X" && mr != "O" && myTurn == 2){mr = "X"; 
          update(); alert("Try Again!"); btnOClick(); return;}
if (br == "X" && bl == "X" && bm != "O" && myTurn == 2){bm = "X"; 
          update(); alert("Try Again!"); btnOClick(); return;}
if (mm == "" && tl =="X"){mm = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}
if (mm == "" && tr =="X" && bl =="X"){mm = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}

if (tl == ""){tl = "X"; return}
if (bm == ""){bm = "X"; return}
if (mm == ""){mm = "X"; ; return}
  
if (tm == "" && tr =="X"){tm = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}
if (ml == "" && br =="X"){ml = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}
if (bl == ""){bl = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}
if (tr = ""){tr = "X"; 
              update(); alert("Try Again!"); btnOClick(); return}
};

function tlClick(){
  if (tl == "O" || tl == "X"){return}
  else tl = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function tmClick(){
  if (tm == "O" || tm == "X"){return}
  else tm = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function trClick(){
  if (tr == "O" || tr == "X"){return}
  else tr = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}

function mlClick(){
  if (ml == "O" || ml == "X"){return}
  else ml = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function mmClick(){
  if (mm == "O" || mm == "X"){return}
  else mm = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function mrClick(){
  if (mr == "O" || mr == "X"){return}
  else mr = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}

function blClick(){
  if (bl == "O" || bl == "X"){return}
  else bl = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function bmClick(){
  if (bm == "O" || bm == "X"){return}
  else bm = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
function brClick(){
  if (br == "O" || br == "X"){return}
  else br = "O";
  checkWin();
  if (playerShape == "O") {enemyTurnX();}
  if (playerShape == "X") {enemyTurnO();}
  update();
}
  
*/
