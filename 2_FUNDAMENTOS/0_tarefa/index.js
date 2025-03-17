// const inquirer = require('inquirer');
// const chalk = require('chalk');

// inquirer.prompt([
//     {
//         name: 'p1',
//         message: 'Qual o seu nome?'
//     },
//     {
//         name: 'p2',
//         message: 'Qual a sua idade?'
//     }

// ]).then((answers) => {
//     console.log(answers);
//     console.log(chalk.bgYellow.black(`Olá ${answers.p1}, você tem ${answers.p2} anos`))
// }).catch(err => console.log("Algo deu errado", err))

const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual seu nome?",
    },
    {
      name: "p2",
      message: "Qual a sua idade?",
    },
    {
      name: "p3",
      message: "Qual o seu estado civil?",
    },
    {
      name: "p4",
      message: "Qual a sua profissão?",
    },
    {
      name: "p5",
      message: "Qual o seu endereço?",
    },
    {
      name: "p6",
      message: "Qual o seu estado?",
    },
  ])
  .then((answer) =>
    chalk.green.blue(
      `Seu nome: ${answer.p1} Idade: ${answer.p2} Estado Civil: ${answer.p3} Profissão: ${answer.p4} Endereço: ${answer.p5}, Estado: ${answer.p6}`
    )
  )
  .catch((err) => chalk.bgRed.black("Algo deu errado, tente novamente", err));
