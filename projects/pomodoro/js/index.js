var setCount = 25;
var setBreak = 5;
var myBreak = 60 * setBreak;
var countDownTime = setCount * 60;
var myDisplay = countDownTime;
var timerID = 0;
var timerStatus = "Pause";
var minutes = parseInt(myDisplay / 60, 10);
var seconds = parseInt(myDisplay % 60, 10);

function startTimer (){
document.getElementById('whatTime').innerHTML = "You should be WORKING!";
  function startBreak(){
    minutes = parseInt(myDisplay / 60, 10)
    seconds = parseInt(myDisplay % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;
    myDisplay = myDisplay - 1;
        if (myDisplay < 1){
        clearInterval(timerID);
        countDownTime = setCount * 60;
        myDisplay = countDownTime;
        timerID = setInterval(startTimer, 1000);}
  };
 if (myDisplay < 1){
    clearInterval(timerID);
    document.getElementById('whatTime').innerHTML = "You should be on BREAK!";
    myDisplay = myBreak;
    timerID = setInterval(startBreak, 1000)} 
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;
myDisplay = myDisplay - 1;
  }; 

function btn1Click(){
  document.getElementById('btn1').innerHTML = timerStatus;
if (timerStatus == "Pause") {document.getElementById('whatTime').innerHTML =
  "Starting..."; timerID = setInterval(startTimer, 1000)};
if (timerStatus == "Start") {document.getElementById('whatTime').innerHTML = 
  "PAUSED"; clearInterval(timerID)};
  if (timerStatus == "Pause") {timerStatus = "Start";} else {timerStatus =
    "Pause";}  
};

function btn2Click(){
document.getElementById('whatTime').innerHTML = "RESET";
clearInterval(timerID);
myDisplay = countDownTime;
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;   
timerStatus = "Start";
document.getElementById('btn1').innerHTML = timerStatus;
timerStatus = "Pause";

};  

function btn3Click(){
document.getElementById('whatTime').innerHTML = "RESET";
clearInterval(timerID);
setBreak = prompt("How many minutes is the break?", 5);
  if (isNaN(setBreak)) {setBreak =5; alert("Not a number.")};
  if (setBreak < 1){setBreak  = 1};;
  if (setBreak  > 99){setBreak  = 99};
myBreak = 60 * setBreak;
document.getElementById('breakClock').innerHTML = "Break Timer: " + setBreak + " minutes";  
myDisplay = countDownTime;
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;   
timerStatus = "Start";
document.getElementById('btn1').innerHTML = timerStatus;
timerStatus = "Pause";    
};


function btn4Click(){
  document.getElementById('whatTime').innerHTML = "RESET";
clearInterval(timerID);  
setCount = prompt("How many minutes do you want to work?", 25);
  if (isNaN(setCount)) {setCount =25;alert("Not a number.")};
  if (setCount < 1){setCount = 1};;
  if (setCount > 99){setCount = 99};
countDownTime = setCount * 60;
  document.getElementById('workClock').innerHTML = "Work Timer: " + setCount + " minutes";
myDisplay = countDownTime;
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;   
timerStatus = "Start";
document.getElementById('btn1').innerHTML = timerStatus;
timerStatus = "Pause"; 
};

function btn5Click(){
document.getElementById('whatTime').innerHTML = "START BREAK";
clearInterval(timerID);  
myDisplay = 0;
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;   
timerStatus = "Start";
document.getElementById('btn1').innerHTML = timerStatus;
timerStatus = "Pause";
  btn1Click();
};

function btn6Click(){
document.getElementById('whatTime').innerHTML = "START WORK";
clearInterval(timerID);
countDownTime = setCount * 60;  
myDisplay = countDownTime;
minutes = parseInt(myDisplay / 60, 10)
seconds = parseInt(myDisplay % 60, 10);
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
document.getElementById('myTimer').innerHTML = minutes + ":" + seconds;   
timerStatus = "Start";
document.getElementById('btn1').innerHTML = timerStatus;
timerStatus = "Pause";
  btn1Click();
};