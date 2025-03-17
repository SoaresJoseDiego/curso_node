const fs = require('fs'); // file system, deixando o padrão de módulos do node

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data);
})