
//Get the number to guess
var numberToGuess=(Math.floor(Math.random() * 101+19))

//NEED TO FIX: display number to guess
$("#number").text(numberToGuess)

// TO DO: Assign random values to all 4 buttons with for loop.
function buttonValue(){
    var value=$(".button").val((Math.floor(Math.random() * 12)))
    if(value<1){
        value=1;
    }
    console.log(value)

}
//TO DO: When button is clicked adds value to score
//TO DO: if score matches numberTOGUESS player wins
//TO DO if score>numberToGuess player loses


getNumber()

buttonValue()
