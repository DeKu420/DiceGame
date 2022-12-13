var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}

document
  .getElementById("dice1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .getElementById("dice2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");
