import inquirer from "inquirer";
import chalk from "chalk";
let quiz = await inquirer.prompt([
    {
        name: "Question1",
        type: "rawlist",
        choices: [`Ammar`, `Saad`, `Usman`, `Ali`],
        message: chalk.bgCyan("What is your name?"),
    },
    {
        name: "Question2",
        type: "rawlist",
        choices: [`Islamabad`, `Rawat`, `Pindi`, `Gujar Khan`],
        message: chalk.bgBlackBright("Where do you live?"),
    },
    {
        name: "Question3",
        type: "rawlist",
        choices: [`Pink`, `Red`, `Blue`, `Black`],
        message: chalk.bgBlueBright("What is your favorite color?"),
    },
]);
let youranswers = [quiz.Question1, quiz.Question2, quiz.Question3];
let correctanswers = ["Ammar", "Rawat", "Black"];
export { youranswers, correctanswers };
