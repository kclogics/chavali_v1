



var popup = document.getElementById('poop');






var refresh = document.getElementsByClassName("exprefresh")[0];





var clicko = document.getElementById("arrowdown3");




clicko.onclick = function() {
    popup.style.display = "block"; 
    refresh.style.display = "none";
    
} 

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        refresh.style.display = "block";
        
    }
}















