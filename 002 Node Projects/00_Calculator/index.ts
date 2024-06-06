#!/usr/bin/env node

import Add from "./sum.js";
import Subtract from "./subtraction.js";
import Multiply from "./multiplication.js";
import Divide from "./division.js";

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const rainbow = chalkAnimation.rainbow("Calculator")

setTimeout(() => 
{
  rainbow.stop(); // Animation stops
}, 5000);

do{

  var calculator = await inquirer.prompt([
    {
      name: "Number1",
      type: "number",
      message: chalk.bgMagenta("Enter the first number"),
    },
    {
      name: "Number2",
      type: "number",
      message: chalk.bgMagenta("Enter the second number"),
    },
    {
      name: "Operation",
      type: "list",
      message: chalk.underline("Enter the operation"),
      choices: [
        chalk.red("Addition"),
        chalk.blue("Subtraction"),
        chalk.green("Multiplication"),
        chalk.yellow("Division"),
      ],
    },
  ]);

  switch (calculator.Operation) 
  {
    case chalk.red("Addition"):
      console.log(`${calculator.Number1} + ${calculator.Number2} = ${Add(calculator.Number1, calculator.Number2)}`);
      break;
    case chalk.blue("Subtraction"):
      console.log(`${calculator.Number1} - ${calculator.Number2} = ${Subtract(calculator.Number1, calculator.Number2)}`);
      break;
    case chalk.green("Multiplication"):
      console.log(`${calculator.Number1} * ${calculator.Number2} = ${Multiply(calculator.Number1, calculator.Number2)}`);
      break;
    case chalk.yellow("Division"):
      console.log(`${calculator.Number1} / ${calculator.Number2} = ${Divide(calculator.Number1, calculator.Number2)}`);
      break;
  }

  var restart = await inquirer.prompt
    ([
      {
        name: "Restart",
        type: "input",
        message: chalk.bgMagenta(`Do you want to restart calculator? Press "Y" to restart`),
      }  
    ])
    

}
while(restart.Restart === "yes" || restart.Restart === "y" || restart.Restart === "Y");