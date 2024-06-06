import { youranswers, correctanswers } from "./main.js";
import chalk from "chalk";

let numbers = 0;

for (let i = 0; i < youranswers.length; i++) {
  if (youranswers[i] === correctanswers[i]) {
    numbers++;
  }
}

console.log(chalk.bgMagenta(`Your score: ${numbers} out of ${correctanswers.length}`));

console.log(chalk.bgGrey(`Your answers: ${youranswers}`));
console.log(chalk.bgGreen(`Correct answers: ${correctanswers}`));