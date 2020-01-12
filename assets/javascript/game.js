
//Get the number to guess
function getNumber(){
    var numberToGuess=(Math.floor(Math.random() * 121))
    console.log(numberToGuess)
        if (numberToGuess<19){
            numberToGuess = 19
            console.log(numberToGuess)
        }
    return numberToGuess
}
//NEED TO FIX: display number to guess
function displayNumber(num){
    $("number").text(num);
}

// TO DO: Assign random values to all 4 buttons with for loop.
function buttonValue{

}
//TO DO: When button is clicked adds value to score
//TO DO: if score matches numberTOGUESS player wins
//TO DO if score>numberToGuess player loses

//TO DO:Call function to either match or lose score every time player clicks
getNumber()

displayNumber(numberToGuess)
