#! /usr/bin/env node 

import inquirer from "inquirer"; 
const answer = await inquirer.prompt([{
    message: "Enter your First Number", type: "number", name: "firstNumber"
},
{
    message: "Enter your Second Number", type: "number", name: "secondNumber"
},
{
    message: "Enter your Operator", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"]
},
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === 'Division') 
    console.log(answer.firstNumber / answer.secondNumber); 








