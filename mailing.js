var displayinbox = document.getElementById("inside_mailsbody");
var displayinbox2 = document.getElementById("inside_mailsbody2");
var displayinbox3 = document.getElementById("inside_mailsbody3");
var displayinbox4 = document.getElementById("inside_mailsbody4");





var refreshinboxyo = document.getElementById("box2");



var clickinbox   = document.getElementById("sideoptions");
var clickinbox2   = document.getElementById("sideoptions2");
var clickinbox3   = document.getElementById("sideoptions3");
var clickinbox4   = document.getElementById("sideoptions4");



refreshinboxyo.onclick = function() {
    displayinbox.style.display = "none"; 
    displayinbox2.style.display = "none";
    displayinbox3.style.display = "none";
    displayinbox4.style.display = "none";
    
    
}




clickinbox.onclick = function() {
    displayinbox.style.display = "block"; 
    displayinbox2.style.display = "none";
    displayinbox3.style.display = "none";
    displayinbox4.style.display = "none";
    
  
} 

clickinbox2.onclick = function() {
    displayinbox2.style.display = "block";
    displayinbox.style.display = "none";
    displayinbox3.style.display = "none";
    displayinbox4.style.display = "none";
}

 clickinbox3.onclick = function() {
      displayinbox3.style.display = "block";
      displayinbox2.style.display = "none";
      displayinbox.style.display = "none";
      displayinbox4.style.display = "none";
     
 }
 
 clickinbox4.onclick = function() {
     displayinbox4.style.display = "block";
     displayinbox3.style.display = "none";
     displayinbox2.style.display = "none";
     displayinbox.style.display = "none";
    
 }
