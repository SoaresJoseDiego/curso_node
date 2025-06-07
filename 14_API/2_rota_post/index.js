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

  console.log(name);
  console.log(price);

  res.json({ message: `O produto ${name} foi criado com sucesso `});
});

app.get("/", (req, res) => {
  res.json({
    message: "Primeira rota criada com sucesso!",
  });
});



app.listen(3000);
