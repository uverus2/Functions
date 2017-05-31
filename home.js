
function main () {
    
    doAGuess(); // defines this function inside the main function 
    
    var form = document.getElementById("guess");
    form.addEventListener('click', random); 
    
    
}

function doAGuess(correctAnswer) {  // performs function on correct asnwer
                
                var guess = Math.random(); // varieble to get the maths finction to generate random number

                    guess = guess * 6;  // times by 6 

                    guess = Math.floor(guess); // makes the number in readable ,format rounds it up

                    if (guess == correctAnswer) { // if it is equals to corret answer 
                        
                        return (true); //returns true

                    } else {

                        return(false); // if not returns false 

                    }
                
            }
            
            

                function random (){ // calls function random 
                
                var myNumber = document.getElementById("myNumber").value; // var my number getting the value inside element guess 
                
                var gotIt = false; // equals false value
                
                var numberOfGuesses = 1; // var that equals 1 
                
                while (gotIt == false) { // loop that loop when gotIt is false

                    if (doAGuess(myNumber) == true) { // if doguess is true 
                        
                        gotIt = true; // got it turns to true 

                        alert ("Got it! It was a " + myNumber + ". It took me " + numberOfGuesses + " guesses."); // this alert is displayed
 
                    } else {

                        numberOfGuesses++; //else it increments by one 

                    }
                
                }
                    
                }
                
            
            
            
        