const chalk = require('chalk');

const nota = 9;

if (nota >= 7) {  // Aqui estava o erro
    console.log(chalk.bgGreen("Aprovado!"));
} else {
    console.log(chalk.bgRed("Reprovado!"));
}
