function runGame(){

    
//longer way
var randomNumber1 = Math.floor(Math.random() * 6) +  1;
var randomDice = "dice" + randomNumber1 +  ".png";
var    randomImageSrc = "images/" + randomDice;
var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSrc);




//short way
var randomNumber2  = Math.floor(Math.random() * 6) + 1;
var  randomImageSrc2 = "images/dice"  + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src" , randomImageSrc2);




//change title

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 is the  Winner! ";

}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player 2 is the Winner! "
}


else{
    document.querySelector("h1").innerHTML = " Draw! "
}


}