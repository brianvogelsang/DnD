var globalPlus = false;
var globalMinus = false;
var globalDiv = false;
var globalTimes = false;
var globalPercent = false;
var globalReset = true;
var lastNum = 0;

function btn1Click(){
  document.getElementById("textBar").innerHTML = 0;
  globalPlus = false;
  globalMinus = false;
  globalDiv = false;
  globalTimes = false;
  globalPercent = false;
  globalReset = true
}
function btn2Click(){
  document.getElementById("textBar").innerHTML = lastNum;
  globalPlus = false;
  globalMinus = false;
  globalDiv = false;
  globalTimes = false;
  globalPercent = false;
  globalReset = true
}
// Number Pad Below ////////////
function btn5Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 7}
  else document.getElementById("textBar").innerHTML = textCurrent + 7;
  globalReset = false;
}
function btn6Click(){
   var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 8}
  else document.getElementById("textBar").innerHTML = textCurrent + 8;
  globalReset = false;
}
function btn7Click(){
   var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 9}
  else document.getElementById("textBar").innerHTML = textCurrent + 9;
  globalReset = false;
}
function btn9Click(){
 var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 4}
  else document.getElementById("textBar").innerHTML = textCurrent + 4;
  globalReset = false;
}
function btn10Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 5}
  else document.getElementById("textBar").innerHTML = textCurrent + 5;
  globalReset = false;
}
function btn11Click(){
   var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 6}
  else document.getElementById("textBar").innerHTML = textCurrent + 6;
  globalReset = false;
}
function btn13Click(){
   var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 1}
  else document.getElementById("textBar").innerHTML = textCurrent + 1;
  globalReset = false;
}
function btn14Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 2}
  else document.getElementById("textBar").innerHTML = textCurrent + 2;
  globalReset = false;
}
function btn15Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 3}
  else document.getElementById("textBar").innerHTML = textCurrent + 3;
  globalReset = false;
}
function btn17Click(){
   var textCurrent = document.getElementById("textBar").innerHTML;
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = 0}
  else document.getElementById("textBar").innerHTML = textCurrent + 0;
  globalReset = false;
}
function btn18Click(){
   var re = /(\.)/g;
   var textCurrent = document.getElementById("textBar").innerHTML;
  console.log(textCurrent.match(re));
  if (globalReset == true){
    document.getElementById("textBar").innerHTML = "0."}
  else if (textCurrent.match(re) == null){document.getElementById("textBar").innerHTML = textCurrent + ".";}
  globalReset = false;
}
///// Number Pad Above /////////
function btn3Click(){
var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
  lastNum = document.getElementById("textBar").innerHTML;
  lastNum = parseFloat(lastNum);
  globalPlus = true;
  globalPercent = true; 
}

function btn4Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
  lastNum = document.getElementById("textBar").innerHTML;
  lastNum = parseFloat(lastNum);
  globalPlus = true;
  globalDiv = true;
  
}
function btn8Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
  lastNum = document.getElementById("textBar").innerHTML;
  lastNum = parseFloat(lastNum);
  globalPlus = true;
  globalTimes = true
}

function btn12Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
  lastNum = document.getElementById("textBar").innerHTML;
  lastNum = parseFloat(lastNum);
  globalMinus = true;
}

function btn16Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
  lastNum = document.getElementById("textBar").innerHTML;
  lastNum = parseFloat(lastNum);
  globalPlus = true;
}

// Equal Functionality ///
function btn19Click(){
  var textCurrent = document.getElementById("textBar").innerHTML;
  var numCurrent = parseFloat(textCurrent);
  if (globalPlus == true){
    document.getElementById("textBar").innerHTML = lastNum + numCurrent; globalPlus = false;}
  if (globalMinus == true){
    document.getElementById("textBar").innerHTML = lastNum - numCurrent; globalMinus = false;}
  if (globalTimes == true){
    document.getElementById("textBar").innerHTML = lastNum * numCurrent; globalTimes = false;}
  if (globalDiv == true){
    document.getElementById("textBar").innerHTML = lastNum / numCurrent; globalDiv = false;}
  if (globalPercent == true){
    document.getElementById("textBar").innerHTML = (1/lastNum) * numCurrent; globalPercent = false;}
  globalReset = true;
}