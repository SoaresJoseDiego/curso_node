const express = require("express");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas - endpoints

app.post("/createproduct", (req, res) => {
  const name = req.body ? req.body.name : undefined;
  const price = req.body ? req.body.price : undefined;

  if(!name) {
    res.status(422).json({ message: "O nome do produto é obrigatório!" });
    return;
  }

  console.log(name);
  console.log(price);

  res.status(201).json({ message: `O produto ${name} foi criado com sucesso `});
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Primeira rota criada com sucesso!",
  });
});



app.listen(3000);
