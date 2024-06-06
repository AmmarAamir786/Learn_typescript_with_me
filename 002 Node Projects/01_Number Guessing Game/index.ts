let random = Math.random() * 10 + 1;
let aiPicked = Math.floor(random);

console.log(aiPicked);

const promptSync = require("prompt-sync")();

let userPicked: number;

do {
  userPicked = Number(promptSync("Guess The Number Picked By AI Between 1 and 10 = "));

  if (userPicked < aiPicked) {
    console.log("AI's number is higher than your guess.");
  } else if (userPicked > aiPicked) {
    console.log("Your guess is higher than AI's number.");
  }
} while (userPicked !== aiPicked);

console.log("Congratulations, you won!");
console.log(`You picked ${userPicked} and AI picked ${aiPicked}`);
