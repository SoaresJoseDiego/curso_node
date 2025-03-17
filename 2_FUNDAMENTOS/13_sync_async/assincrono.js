const fs = require('fs')

console.log("inicio");

fs.writeFile("arquivo.txt", "oi", function(err){
    setTimeout(() => {
        console.log("Arquivo criado");
    }, 2000);
} )

console.log("fim");

