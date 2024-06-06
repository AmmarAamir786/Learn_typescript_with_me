var random = Math.random() * 10 + 1;
var aiPicked = Math.floor(random);
console.log(aiPicked);
var promptSync = require("prompt-sync")();
var userPicked;
do {
    userPicked = Number(promptSync("Guess The Number Picked By AI Between 1 and 10 = "));
    if (userPicked < aiPicked) {
        console.log("AI's number is higher than your guess.");
    }
    else if (userPicked > aiPicked) {
        console.log("Your guess is higher than AI's number.");
    }
} while (userPicked !== aiPicked);
console.log("Congratulations, you won!");
console.log("You picked ".concat(userPicked, " and AI picked ").concat(aiPicked));
