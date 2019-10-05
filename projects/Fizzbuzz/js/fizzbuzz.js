// Code by Brian
// This is the code to 'FizzBuzz'
// bvogelsang.com/projects/FizzBuzz/


// This function will generate a list of numbers 1-100

function getIndex() {
    var indexButton = document.getElementById('indexButton');
    indexButton.style.display ='none';
    
    var fizzButton = document.getElementById('fizzButton');
    fizzButton.style.display ='block';
    
    var p = document.getElementById('printOut');
    
    var i;
    
    for (i=1;i<101;i++){ p.innerHTML = p.innerHTML + '<p>Index: ' +i+ '</p>'; }
}


// This function will convert numbers divisible by 3 to 'Fizz'

function getFizz() {
    var buzzButton = document.getElementById('buzzButton');
    buzzButton.style.display='block';
    
    var fizzButton = document.getElementById('fizzButton');
    fizzButton.style.display='none';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++){
    c = i;   
        
    if (c % 3 === 0) {c = 'Fizz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
        
    }
}

// This function will convert numbers divisible by 5 to 'Buzz'
function getBuzz() {
    var buzzButton = document.getElementById('buzzButton');
    buzzButton.style.display='none';
    
    var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    fizzBuzzButton.style.display='block';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++){
        
    c = i;   
        
    if (c % 5 === 0){c = 'Buzz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
        
    }
}

// This function will 'Fizz' and 'Buzz'
// This is the only function that is needed, however,
// I have included the previous two functions to demonstrate
// the process behind the code one step at a time.

function getFizzBuzz() {
    var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    fizzBuzzButton.style.display='none';
    var resetButton = document.getElementById('resetButton');
    resetButton.style.display='block';
    var showCodeButton = document.getElementById('showCodeButton');
    showCodeButton.style.display='block';
    
    var p =document.getElementById('printOut');
    
    p.innerHTML = '';
    
    var i;
    var c;
    
    for (i=1;i<101;i++) {
        
    c = i;   
       
    if (c % 3 === 0  &&  c % 5 === 0 ) {c = 'FizzBuzz'};    
    if (c % 3 === 0){c = 'Fizz'};    
    if (c % 5 === 0){c = 'Buzz'};
        
    p.innerHTML = p.innerHTML + '<p>' +c+ '</p>' ;
     
    }
 }

// This function will reload the page and reset the browser

function reset() {
    location.reload();
}

// This will display the javascript page in an <iframe>

function showCode(){
    var p =document.getElementById('printOut');
    
    p.innerHTML = ""
    
    var showMyCode = document.getElementById('myCode');
    showMyCode.style.display = 'block';
   
}


