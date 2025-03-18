const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  const palavra = "Olá Mundo";

  const auth = false;

  const user = {
    name: "Diego",
    surname: "Soares",
    age: "21",
  };
  res.render("home", { user: user, palavra, auth });
});

app.listen(3000, () => {
  console.log("App funcionando");
});
