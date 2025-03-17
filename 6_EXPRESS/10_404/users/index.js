const express = require('express');
const path = require("path");
const router = express.Router();


const basePath = path.join(__dirname, "../templates");


router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
  console.log(req.body);

  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário é ${name} e a idade é ${age}`)
res.sendFile(`${basePath}/userform.html`)

});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  // Leiura da tabelas users, resgatar um usuário do banco
  console.log(`Estamos buscando o usuário: ${id}`);

  res.sendFile(`${basePath}/users.html`);
});


module.exports = router;

