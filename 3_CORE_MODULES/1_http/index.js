const http = require('http');

const port = 3000;


const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Olá Mundo!')
})


server.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
    
})



// const http = require('http'); // Importa o módulo http

// const port = 3000; // Define a porta na qual o servidor vai escutar

// const server = http.createServer((req, res) => { // Cria o servidor HTTP
    // res.writeHead(200, { 'Content-Type': 'text/plain' }); // Define o cabeçalho da resposta com o status 200 e o tipo de conteúdo como texto simples
    // res.end('Olá Mundo'); // Envia a resposta "Olá Mundo" e encerra a conexão
// ;

// server.listen(port, () => { // Faz o servidor escutar na porta definida
    // console.log(`Server rodando na porta: ${port}`); // Imprime uma mensagem no console indicando que o servidor está rodando
// });