const express = require("express");
const app = express();
const port = 3000; // variavel de ambiente
const path = require("path");
const basePath = path.join(__dirname, "templates");



app.post('/users/save', (req, res) => {})

app.get("/users/:id", (req, res) => {
  const id = req.params.id
  // Leiura da tabelas users, resgatar um usuário do banco
  console.log(`Estamos buscando o usuário: ${id}`);
  
  res.sendFile(`${basePath}/users.html`);
});



app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`Sistema rodando na porta ${port}`);
});


app.post('/users/save', (req, res) => {

})