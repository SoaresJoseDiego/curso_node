const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item1", "item2", "item3", "item4", "item5"];

  res.render("dashboard", { items });
});

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Este artigo vai te ajudar a aprender Node.js',
    comments: 4,
  }

  res.render('blogpost', {post})
})

app.get("/", (req, res) => {
  const palavra = "Olá Mundo";

  const auth = false;
  const approved = false;

  const user = {
    name: "Diego",
    surname: "Soares",
    age: "21",
  };
  res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando");
});
