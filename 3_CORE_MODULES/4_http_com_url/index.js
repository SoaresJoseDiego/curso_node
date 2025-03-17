const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;

  if (!name) {
    res.end(
      '<h1>Preencha o seu nome: </h1><form methog="GET" ><input type="text" name="name"/><input type="submit" value="Enviar" /></form>'
    );
  } else {
    res.end(`<h1>Seja bem vindo ${name}</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
