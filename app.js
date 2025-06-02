'use strict'
///// initial values :
let score=20;
let highScore=0;
let secretNum= Math.trunc(Math.random()*20+1)

const btnCheck=document.querySelector('.btn-check')

const displayMessage= function(message){
    document.querySelector('#start-guess').textContent=message
}

document.querySelector('.logo').textContent=secretNum;
//// 1 ===> 20
////chnoua unjm user yhot ===> no number ; correct number ; wrong number( y akther wela akal)



btnCheck.addEventListener("click" , function(){
    const guess= Number(document.querySelector('input').value);
    if (!guess){
        displayMessage('⛔ Wrong number ! please enter a number between 1 and 20 !')
    }else if (guess===secretNum ){
        displayMessage('🎉 Correct number ... ')
         score++; ///// increment ...
        document.querySelector('.score').textContent=score ; /////update ui (user interface )
        document.querySelector('body').style.backgroundColor=' green'
        document.querySelector("input").value = "";
        secretNum = Math.trunc(Math.random() * 20 + 1);
        
    }else if (guess>secretNum){
        displayMessage('📉 too high..!')
        document.querySelector("body").style.backgroundColor = "#222";
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector("input").value = "";
    }else if (guess<secretNum){
        displayMessage('📈 too low ...! ')
             document.querySelector("body").style.backgroundColor = "#222";
        score--;
        document.querySelector(".score").textContent = score;
        document.querySelector("input").value = "";
    }else {
        displayMessage('💥 you loose ..!')
        document.querySelector.style.backgroundColor='red'

    }
})

//// again

document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score; //// update (ui)
  document.querySelector(".logo").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("input").value = "";
  document.querySelector(".highScore").textContent = "0";
  displayMessage("Start guessing ...");
});