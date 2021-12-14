const express = require('express');
const app = express();

//Avisa para o express que vamos utilizar EJS para renderizar o HTML.
app.set("view engine", "ejs");

//rota index
app.get("/", function (req, res) {
  res.render("index");
});

//rota sobre
app.get("/sobre", function (req, res) {
  res.render("about");
});

app.listen(8080);
console.log("Rodando");