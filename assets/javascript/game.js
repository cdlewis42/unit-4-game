//add variables for win/loss/score
var win=0;
var loss=0;
var score=0;
//display the zeros for the variables.
$("#wins").append(win);
$("#losses").append(loss);
$("#score").append(score);
//Get the number to guess
var numberToGuess=(Math.floor(Math.random() * 101+19))

//display number to guess
$("#number").text(numberToGuess)


//Assign random values to all 4 buttons.

var em1=(Math.floor(Math.random() * 11+1))
var em2=(Math.floor(Math.random() * 11+1))
var em3=(Math.floor(Math.random() * 11+1))
var em4=(Math.floor(Math.random() * 11+1))
//TO DO: When button is clicked adds value to score
//TO DO: if score matches numberTOGUESS player wins
//TO DO if score>numberToGuess player loses


getNumber()

buttonValue()
