// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
var bodyRect;
var elemRect;
var offset;

function scrollFunction() {
    
   nameRect = document.getElementById("nameText").getBoundingClientRect(); 
    
  if (document.body.scrollTop > nameRect.top || document.documentElement.scrollTop > nameRect.top) {
    document.getElementById("myBtn").style.display = "inline-block";
    document.getElementById("myBtn2").style.display = "inline-block";
    document.getElementById("myBtn3").style.display = "inline-block";
    document.getElementById("headDiv").style.display = "none";
     
      
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("myBtn2").style.display = "none";
    document.getElementById("myBtn3").style.display = "none";
    document.getElementById("headDiv").style.display = "inline-block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll to the spell area
function spellScroll(){ 
     bodyRect = document.body.getBoundingClientRect(),
     elemRect = document.getElementById("firebolt").getBoundingClientRect(),
     offset   = elemRect.top - bodyRect.top;
    
  document.body.scrollTop = offset; // For Safari
  document.documentElement.scrollTop = offset; // For Chrome, Firefox, IE and Opera
     
}  

// Scroll to the Journal
 function journalScroll(){ 
     bodyRect = document.body.getBoundingClientRect(),
     elemRect = document.getElementById("journal").getBoundingClientRect(),
     offset   = elemRect.top - bodyRect.top;
    
  document.body.scrollTop = offset; // For Safari
  document.documentElement.scrollTop = offset; // For Chrome, Firefox, IE and Opera
     
}  