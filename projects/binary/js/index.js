function binaryAgent(str) {
  var str = document.getElementById("myInput").value;
  document.getElementById("myBinary").innerHTML = "<b>Binary code: </b>"+str;
  var array = str.split(" ");
  var code ="";
  
  str = "";
  array.forEach(function(letter) {
    var decimal = 0;
    if (letter[7] == 1) {
      decimal += 1;
    }
    if (letter[6] == 1) {
      decimal += 2;
    }
    if (letter[5] == 1) {
      decimal += 4;
    }
    if (letter[4] == 1) {
      decimal += 8;
    }
    if (letter[3] == 1) {
      decimal += 16;
    }
    if (letter[2] == 1) {
      decimal += 32;
    }
    if (letter[1] == 1) {
      decimal += 64;
    }
    if (letter[0] == 1) {
      decimal += 128;
    }
    code = code +" "+ decimal;
    str = str + String.fromCharCode(decimal);
  });
  document.getElementById("myOutput").innerHTML = str;
  document.getElementById("myLetter").innerHTML = "<b>Alphabet code: </b>"+str;
  document.getElementById("myCode").innerHTML = "<b>Character code: </b>"+code;
  return str;
}
var input = document.getElementById("myInput").value;

function gotClicked(){return binaryAgent(input);};