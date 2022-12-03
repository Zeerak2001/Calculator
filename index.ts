#!usr/bin/env node

import chalkAnimation from "chalk-animation";
import chalk from "chalk";
import inquirer from "inquirer";


const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000);
    })
}
async function welcome(){
    let rainbow = chalkAnimation.rainbow("Let's start calculate");
    await sleep();
    rainbow.stop()
}

welcome();

async function askQuestion(){
    const answers = await inquirer
    .prompt([
        {
            type : "list" ,
            name : "operator" ,
            message : "Which Operation You Want To Perform? \n" ,
            choices : ["Addition","Substraction","Multiplication","Division"],
        },
        {
            type : "number",
            name : "num1" ,
            message : "Enter Number 1 : "
        },
        {
            type : "number",
            name : "num2" ,
            message : "Enter Number 2 : "
        }
    ]);
    
        if
        (answers.operator == "Addition"){
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }

        else if
        (answers.operator == "Substraction"){
            console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
        }

        else if
        (answers.operator == "Multiplication"){
            console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        
        else if
        (answers.operator == "Division"){
            console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
        }
}

askQuestion();

async function startAgain(){
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type : "input" ,
            name : "restart" ,
            message : "Do You Want To Continue? Press y or n: "
        })
     
    }while(again.restart == "y"|| again.restart == "Y" || again.restart == "yes" || again.restart == "YES")
}
startAgain()