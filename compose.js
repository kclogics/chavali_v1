

var popup1 = document.getElementById('backy');



var clicko2 = document.getElementById("box5");

var closepopup = document.getElementsByClassName("close66")[0];
var deletemailo = document.getElementsByClassName("detto")[0];





clicko2.onclick = function() {
    popup1.style.display = "block"; 
   deletemailo.style.display = "none";

} 

closepopup.onclick = function() {
     popup1.style.display = "none";
    deletemailo.style.display = "block";
    
}

