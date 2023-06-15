function rollDice() {
    var diceElement = document.getElementById("dice");
    var randomNum = Math.floor(Math.random() * 6) + 1;
    diceElement.textContent = randomNum;
  }