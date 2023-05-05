function diceRoll() {
    var result = Math.floor(Math.random() * 6) + 1;
    return result;
}

var randomNumber1 = diceRoll();
var randomNumber2 = diceRoll();

var imgElements = document.getElementsByTagName("img");
imgElements[0].src = "images/dice" + randomNumber1 + ".png";
imgElements[1].src = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Draw!";
}