var counter = 0;

function basicRoll(min,max){
    counter = counter + 1;
    var sB = document.getElementById('scoreBoard');
    sB.innerHTML = '<h1> Roll that d4! </h1>';
    
    //'min' should be 1 for dice rolls
    //'max' should be dice value max + 1 
    var result = Math.random() * (+max - +min) + +min;
    result = Math.floor(result);
    
    sB.innerHTML = '<h1> You rolled a d'+ (max-1) +'! <br> You got a ' + result + '!</h1><h1 style="font-size:2em"><br> You have rolled: ' +counter+ ' time(s). </h1>';
    
    if (result == 20 && max == 21) {sB.innerHTML=sB.innerHTML+'<br><h1>CRITICAL!!!</h1>'};
}

function MakeCharacter(){
    var strI = document.getElementById('str');
    var dexI = document.getElementById('dex');
    var conI = document.getElementById('con');
    var intI = document.getElementById('int');
    var wisI = document.getElementById('wis');
    var chaI = document.getElementById('cha');
    
    var max = 19;
    var min = 6;
    var myList = [15,16,17,18,19,20];
    
    
    for (i=0;i<7;i++){
        
    var result = Math.random() * (+max - +min) + +min;
    result = Math.floor(result);
    
    myList[i] = result;
    
    } 
    strI.value = myList[0];
    dexI.value = myList[1];
    conI.value = myList[2];
    intI.value = myList[3];
    wisI.value = myList[4];
    chaI.value = myList[5];
    
}