const fs = require('fs')


console.log("inicio");


fs.writeFileSync("arquivo.txt", "conteudo do arquivo");

console.log("Fim");

