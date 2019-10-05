//window.onscroll = function() {scrollFunction()};
var bodyRect;
var elemRect;
var offset;

function scrollFunction() {
    
   nameRect = document.getElementById("nyxNameText").getBoundingClientRect(); 
    
  if (document.body.scrollTop > nameRect.top || document.documentElement.scrollTop > nameRect.top) {
    document.getElementById("nyxBtn1").style.display = "inline-block";
    document.getElementById("nyxBtn2").style.display = "inline-block";
    document.getElementById("nyxBtn3").style.display = "inline-block";
 
      
  } else {
    document.getElementById("nyxBtn1").style.display = "none";
    document.getElementById("nyxBtn2").style.display = "none";
    document.getElementById("nyxBtn3").style.display = "none";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Scroll to the spell area
function nxySheetScroll(){ 
     bodyRect = document.body.getBoundingClientRect(),
     elemRect = document.getElementById("nyxpdf").getBoundingClientRect(),
     offset   = elemRect.top - bodyRect.top;
    
  document.body.scrollTop = offset; // For Safari
  document.documentElement.scrollTop = offset; // For Chrome, Firefox, IE and Opera
     
}  

// Scroll to the Journal
 function nxyFormScroll(){ 
     bodyRect = document.body.getBoundingClientRect(),
     elemRect = document.getElementById("druidFormList").getBoundingClientRect(),
     offset   = elemRect.top - bodyRect.top;
    
  document.body.scrollTop = offset; // For Safari
  document.documentElement.scrollTop = offset; // For Chrome, Firefox, IE and Opera
     
}  