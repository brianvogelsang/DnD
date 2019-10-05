var currentSequence = [];
var sequenceCount = 0;
var clickCounter = 0;
var highScore = 0;

function StartGame(){

    sequenceCount = 0;

    var startBtn = document.getElementById('startBtn');
    startBtn.style.display='none';

    var yellowBtn =
        document.getElementById('yellowBtn');
    yellowBtn.style.display='inline-block';

     var blueBtn =
        document.getElementById('blueBtn');
    blueBtn.style.display='inline-block';

     var greenBtn =
        document.getElementById('greenBtn');
    greenBtn.style.display='inline-block';

     var redBtn =
        document.getElementById('redBtn');
    redBtn.style.display='inline-block';

    StartSequence();
}

function playA(){
    var A = document.getElementById('A');
    var yellowBox = document.getElementById('yellowBtn');



    A.volume = 0.1;
    A.currentTime= 0;
    A.play();
    yellowBox.style.backgroundColor = 'lightyellow';
    var yellowColorTimer = setTimeout(yellowColorChange, 250);
}

function playB(){
     var B = document.getElementById('B');
     var blueBox = document.getElementById('blueBtn');



    B.volume = 0.1;
    B.currentTime= 0;
    B.play();
    blueBox.style.backgroundColor = 'lightblue';
    var blueColorTimer = setTimeout(blueColorChange, 250);

}

function playC(){
    var C = document.getElementById('C');
    var greenBox = document.getElementById('greenBtn');


    C.volume = 0.1;
    C.currentTime= 0;
    C.play();
    greenBox.style.backgroundColor = 'lightgreen';
    var greenColorTimer = setTimeout(greenColorChange, 250);

}
function playD(){
    var D = document.getElementById('D');
    var redBox = document.getElementById('redBtn');

    D.volume = 0.1;
    D.currentTime= 0;
    D.play();
    redBox.style.backgroundColor = 'lightcoral';
    var redColorTimer = setTimeout(redColorChange, 250);
}



function clickA(){
    var A = document.getElementById('A');
    var yellowBox = document.getElementById('yellowBtn');
    var error = document.getElementById('error');

    if (currentSequence[clickCounter] == 1) {
    A.volume = 0.1;
    A.currentTime= 0;
    A.play();
    yellowBox.style.backgroundColor = 'lightyellow';
    var yellowColorTimer = setTimeout(yellowColorChange, 250);
        clickCounter = clickCounter + 1;
        sequenceCount = sequenceCount + 1;
        if (clickCounter>=currentSequence.length) {
            disableButtons();
            setTimeout(StartSequence, 1500);}
    }
    else {
       errorFunction();


}
    }

function clickB(){
     var B = document.getElementById('B');
     var blueBox = document.getElementById('blueBtn');
    var error = document.getElementById('error');

    if (currentSequence[clickCounter] == 2) {
    B.volume = 0.1;
    B.currentTime= 0;
    B.play();
    blueBox.style.backgroundColor = 'lightblue';
    var blueColorTimer = setTimeout(blueColorChange, 250);
        clickCounter = clickCounter + 1;
        sequenceCount = sequenceCount + 1;
        if (clickCounter>=currentSequence.length) {
            disableButtons();
            setTimeout(StartSequence, 1500);}
    }
    else {
        errorFunction();
    }
}

function clickC(){
    var C = document.getElementById('C');
    var greenBox = document.getElementById('greenBtn');
    var error = document.getElementById('error');

    if (currentSequence[clickCounter] == 3) {

    C.volume = 0.1;
    C.currentTime= 0;
    C.play();
    greenBox.style.backgroundColor = 'lightgreen';
    var greenColorTimer = setTimeout(greenColorChange, 250);
        clickCounter = clickCounter + 1;
        sequenceCount = sequenceCount + 1;
        if (clickCounter>=currentSequence.length) {
            disableButtons();
            setTimeout(StartSequence, 1500);}
    }
    else {
      errorFunction();
    }
}

function clickD(){
    var D = document.getElementById('D');
    var redBox = document.getElementById('redBtn');
    var error = document.getElementById('error');

    if (currentSequence[clickCounter] == 4) {
    D.volume = 0.1;
    D.currentTime= 0;
    D.play();
    redBox.style.backgroundColor = 'lightcoral';
    var redColorTimer = setTimeout(redColorChange, 250);
        clickCounter = clickCounter + 1;
        sequenceCount = sequenceCount + 1;
        if (clickCounter>=currentSequence.length) {
            disableButtons();
            setTimeout(StartSequence, 1500);}
    }
    else {
        errorFunction();
    }

}

function blueColorChange(){
    var blueBox = document.getElementById('blueBtn');
    blueBox.style.backgroundColor = 'blue';
}
function yellowColorChange(){
    var yellowBox = document.getElementById('yellowBtn');
    yellowBox.style.backgroundColor = 'yellow';
}
function redColorChange(){
    var redBox = document.getElementById('redBtn');
    redBox.style.backgroundColor = 'red';
}
function greenColorChange(){
    var greenBox = document.getElementById('greenBtn');
    greenBox.style.backgroundColor = 'green';
}


function StartSequence(){

    disableButtons();
    setTimeout(enableButtons, (currentSequence.length * 500));

    clickCounter = 0;

    var result = Math.random() * (5 - 1) + 1;
    result = Math.floor(result);

    currentSequence.push(result);

    var i = 0;
    for (i=0;i<=sequenceCount;i++)
    {

        var timer = (i * 1000);
        if (currentSequence[i] ==1 ) {setTimeout(playA, timer)}
        else if (currentSequence[i] ==2 ) {setTimeout(playB, timer)}
        else if (currentSequence[i] ==3 ) {setTimeout(playC, timer)}
        else if (currentSequence[i] ==4 ) {setTimeout(playD, timer)}

if (highScore <= sequenceCount) {
  highScore = sequenceCount;
}
        var debug = document.getElementById('debug');
    debug.innerHTML = "Score = " + sequenceCount + '<br> High Score = '+highScore;

    }





   // var debug = document.getElementById('debug');
//    debug.innerHTML =currentSequence + " " + sequenceCount;

}
function disableButtons() {
    var blueBox = document.getElementById('blueBtn');
    var yellowBox = document.getElementById('yellowBtn');
    var redBox = document.getElementById('redBtn');
    var greenBox = document.getElementById('greenBtn');
    blueBox.disabled = true;
    yellowBox.disabled = true;
    redBox.disabled = true;
    greenBox.disabled = true;
}
function enableButtons() {
    var blueBox = document.getElementById('blueBtn');
    var yellowBox = document.getElementById('yellowBtn');
    var redBox = document.getElementById('redBtn');
    var greenBox = document.getElementById('greenBtn');
    blueBox.disabled = false;
    yellowBox.disabled = false;
    redBox.disabled = false;
    greenBox.disabled = false;

}

function errorFunction(){
        error.volume =.2;
        error.currentTime=0;
        error.play();
        disableButtons();
        currentSequence = [];
        sequenceCount = 0;
        clickCounter = 0;

        setTimeout(StartSequence, 1500);
}
