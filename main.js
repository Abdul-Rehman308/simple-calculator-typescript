#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    {
        name: "Number1",
        type: "number",
        message: "Enter the frist Number",
    },
    {
        name: "Number2",
        type: "number",
        message: "Enter the second Number",
    },
    {
        name: "operator",
        type: "list",
        message: "Select your operator",
        choices: ["Addition", "Subtract", "Multiply", "Divide"],
    },
]);
if (asnwer.operator === "Addition") {
    console.log(chalk.green.bold(asnwer.Number1 + asnwer.Number2));
}
else if (asnwer.operator === "Subtract") {
    console.log(chalk.blue.bold(asnwer.Number1 - asnwer.Number2));
}
else if (asnwer.operator === "Multiply") {
    console.log(chalk.yellow.bold(asnwer.Number1 * asnwer.Number2));
}
else if (asnwer.operator === "Divide") {
    console.log(chalk.red.bold(asnwer.Number1 / asnwer.Number2));
}
else {
    console.log(chalk.gray.bold("plzz Enter Valid Number"));
}
