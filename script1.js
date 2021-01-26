function myMove () { 

    var element1 = document.getElementById("animate"); 
    var pos = 0 ;
    var id = setInterval (frame,9);
    
    function frame(){
        if ( pos == 350){ 
            clearInterval(id)
        } else {
            pos++;
            element1.style.top = pos + "px";
            element1.style.left = pos + "px";
        }
    }
}