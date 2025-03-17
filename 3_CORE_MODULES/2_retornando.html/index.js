const http = require('http');

const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  res.end('<h1>Olá Mundo! Este é o meu primeiro server com HTML!</h1><p>Testando atualização automática</p>')
})


server.listen(port, () => {
    console.log(`Server rodando na porta: ${port}`);
})

