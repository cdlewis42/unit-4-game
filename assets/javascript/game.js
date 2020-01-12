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

//reset game function
function resetGame(){
    score=0;
    em1=(Math.floor(Math.random() * 11+1));
    em2=(Math.floor(Math.random() * 11+1));
    em3=(Math.floor(Math.random() * 11+1));
    em4=(Math.floor(Math.random() * 11+1));
    numberToGuess=(Math.floor(Math.random() * 101+19));
    $("#number").text(numberToGuess)
}

//the functions for if score matches numberToGuess player wins or loses
function playerWin(){
    win++;
    $("#wins").text("Wins: " + win);
    resetGame();
    //maybe play a sound!
}

function playerLose(){
    loss++;
    $("#losses").text("Losses: " + loss);
    resetGame();
    //maybe play a sound!
}
//When button is clicked adds value to score

$("#button1").on("click",function(){
    score=score+em1;
    $("#score").text(score);
        if (score>numberToGuess){
            playerLose()
        }
        else if (playerWin===score){
            playerWin();
        }
})
$("#button2").on("click",function(){
    score=score+em2;
    $("#score").text(score);
        if (score>numberToGuess){
            playerLose()
        }
        else if (playerWin===score){
            playerWin();
        }
})
$("#button3").on("click",function(){
    score=score+em3;
    $("#score").text(score);
        if (score>numberToGuess){
            playerLose()
        }
        else if (playerWin===score){
            playerWin();
        }
})
$("#button4").on("click",function(){
    score=score+em4;
    $("#score").text(score);
        if (score>numberToGuess){
            playerLose()
        }
        else if (playerWin===score){
            playerWin();
        }
})

