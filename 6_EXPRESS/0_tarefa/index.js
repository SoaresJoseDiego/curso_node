const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const rotas = require("./homeR");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

app.use("/rotas", rotas);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`Sistema rodando na porta ${port}`);
});
