function main () {  // defines function main onloading the page
    
    average(); // creates this function inside the main 
    findAv (); // creates this function inside the main
    

    
}

 function average (a,b) { // takes values of a and b 
        
        return ((a + b) / 2); //returns the a+b / 2 values when called 
        
    }
    
function findAv () { // average finder 
    
    var x = 7; // defines a and b variables 
    var y = 6;
    
    alert(average(x,y)); // alerts the answer by calling the function average 
    
    // jumps to average function calculates it and returns the value
}

