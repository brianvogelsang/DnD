var counter = 0;

function basicRoll(min,max){
    counter = counter + 1;
    var sB = document.getElementById('scoreBoard');
    sB.innerHTML = '<h1> Roll that d4! </h1>';
    
    //'min' should be 1 for dice rolls
    //'max' should be dice value max + 1 
    
    var result = Math.random() * (+max - +min) + +min;
    var result2 = Math.random() * (+max - +min) + +min;
    result = Math.floor(result);
    result2 = Math.floor(result2);
    
    //document.getElementById('debug').innerHTML = result + ' ' + result2;
    
    if(document.getElementById('disSwitch').checked == true){
       if (result2 <= result){result = result2;}
       }
    
    if(document.getElementById('advSwitch').checked == true){
       if (result2 >= result){result = result2;}
       }
    
    sB.innerHTML = '<h1> You rolled a d'+ (max-1) +'! <br> You got a ' + result +
        '!</h1><h1 style="font-size:2em"><br> You have rolled: ' +counter+ ' time(s). </h1>';
    
    if (result == 20 && max == 21) {sB.innerHTML=sB.innerHTML+'<br><h1>CRITICAL!!!</h1>'};
    
    document.getElementById('disSwitch').checked = false;
    document.getElementById('advSwitch').checked = false;
}

function advClick(){
    if(document.getElementById('disSwitch').checked == true){
        document.getElementById('disSwitch').checked = false;
    }
}

function disClick(){
    if(document.getElementById('advSwitch').checked == true){
        document.getElementById('advSwitch').checked = false;
    }
}



//Stat Roller //
function MakeCharacter(){
    var strI = document.getElementById('str');
    var dexI = document.getElementById('dex');
    var conI = document.getElementById('con');
    var intI = document.getElementById('int');
    var wisI = document.getElementById('wis');
    var chaI = document.getElementById('cha');
    
    var strS = document.getElementById('strS');
    var dexS = document.getElementById('dexS');
    var conS = document.getElementById('conS');
    var intS = document.getElementById('intS');
    var wisS = document.getElementById('wisS');
    var chaS = document.getElementById('chaS');
    
    var acro = document.getElementById('acrobatics');
    var anim = document.getElementById('animal');
    var arca = document.getElementById('arcana');
    var athl = document.getElementById('athletics');
    var dece = document.getElementById('deception');
    var hist = document.getElementById('history');
    var insi = document.getElementById('insight');
    var inti = document.getElementById('intimidation');
    var inve = document.getElementById('investigation');
    var medi = document.getElementById('medicine');
    var natu = document.getElementById('nature');
    var perc = document.getElementById('perception');
    var perf = document.getElementById('performance');
    var pers = document.getElementById('persuasion');
    var reli = document.getElementById('religion');
    var slei = document.getElementById('sleight');
    var stea = document.getElementById('stealth');
    var surv = document.getElementById('survival');
    
    var max = 7;
    var min = 1;
    var myList = [15,16,17,18,19,20];
    
    
    for (i=0;i<6;i++){
        
        var result1 = Math.random() * (+max - +min) + +min;
        var result2 = Math.random() * (+max - +min) + +min;
        var result3 = Math.random() * (+max - +min) + +min;
        var result4 = Math.random() * (+max - +min) + +min;
        var resultArray = [Math.floor(result1), Math.floor(result2), Math.floor(result3), Math.floor(result4)];
        resultArray.sort();
        
        //document.getElementById('debug').innerHTML = resultArray;
        
        var result = resultArray[1] + resultArray[2] + resultArray[3];
    
        myList[i] = result;
    }
    
    strI.value = myList[0];
    dexI.value = myList[1];
    conI.value = myList[2];
    intI.value = myList[3];
    wisI.value = myList[4];
    chaI.value = myList[5];
    
    strS.value = getMod(strI.value);
    dexS.value = getMod(dexI.value);
    conS.value = getMod(conI.value);
    intS.value = getMod(intI.value);
    wisS.value = getMod(wisI.value);
    chaS.value = getMod(chaI.value);
    
    acro.value = getMod(dexI.value);
    anim.value = getMod(wisI.value);
    arca.value = getMod(intI.value);
    athl.value = getMod(strI.value);
    dece.value = getMod(chaI.value);
    hist.value = getMod(intI.value);
    insi.value = getMod(wisI.value);
    inti.value = getMod(chaI.value);
    inve.value = getMod(intI.value);
    medi.value = getMod(wisI.value);
    natu.value = getMod(intI.value);
    perc.value = getMod(wisI.value);
    perf.value = getMod(chaI.value);
    pers.value = getMod(chaI.value);
    reli.value = getMod(intI.value);
    slei.value = getMod(dexI.value);
    stea.value = getMod(dexI.value);
    surv.value = getMod(wisI.value);
        
}

function getMod(val){
    var mod = 0;
    if (val > 11){mod = mod + 1;}
    if (val > 13){mod = mod + 1;}
    if (val > 15){mod = mod + 1;}
    if (val > 17){mod = mod + 1;}
    if (val > 19){mod = mod + 1;}
    if (val > 21){mod = mod + 1;}
    if (val > 23){mod = mod + 1;}
    
    if (val < 9){mod = mod - 1;}
    if (val < 7){mod = mod - 1;}
    if (val < 5){mod = mod - 1;}
    if (val < 3){mod = mod - 1;}
    if (val < 1){mod = mod - 1;}
    
    return mod;
}