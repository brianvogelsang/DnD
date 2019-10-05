function setId(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");   
}


function stopSounds(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
    
confirm.innerHTML='Leaving Room';
    
rain.pause();
fire.pause();
library.pause();
}



function startJungleRoom(){
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
var startBtn = document.getElementById("JungleRoomStartBtn");   
var stopBtn = document.getElementById("JungleRoomStopBtn"); 
    
confirm.innerHTML='Starting: Jungle Room';

startBtn.style.display='none';
stopBtn.style.display='block'; 
    
    
rain.loop = true;
rain.volume =0.2;
rain.muted = false;
rain.autoplay = true;
rain.play();
rain.controls =true;
    
fire.loop = true;
fire.volume =0.35;
fire.muted = false;
fire.autoplay = true;
fire.play();    
fire.controls = true;
    
}

function stopJungleRoom() {
var rain = document.getElementById("myRain");
var fire = document.getElementById("myFire");
var confirm = document.getElementById("currentPlaylistText");
var startBtn = document.getElementById("JungleRoomStartBtn");   
var stopBtn = document.getElementById("JungleRoomStopBtn"); 
    
confirm.innerHTML='Stopping Jungle Room';

startBtn.style.display='block';
stopBtn.style.display='none';     
    
rain.pause();
fire.pause();  
}

function startLibrary(){
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
var startBtn = document.getElementById("LibraryRoomStartBtn");   
var stopBtn = document.getElementById("LibraryRoomStopBtn");      
    
confirm.innerHTML='Starting: Library';
    
startBtn.style.display='none';
stopBtn.style.display='block';     
    
library.loop = true;
library.volume =0.5;
library.muted =false;
library.autoplay = true;
library.play();
library.controls =true;
    
}
function stopLibrary(){
var library = document.getElementById("myLibrary");
var confirm = document.getElementById("currentPlaylistText");
var startBtn = document.getElementById("LibraryRoomStartBtn");   
var stopBtn = document.getElementById("LibraryRoomStopBtn");    
    
confirm.innerHTML='Stopping Library Sounds';
    
startBtn.style.display='block';
stopBtn.style.display='none';       
    

library.pause();
}


