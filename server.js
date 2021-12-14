const express = require('express');
const app = express();

//Avisa para o express que vamos utilizar EJS para renderizar o HTML.
app.set("view engine", "ejs");

//rota index
app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      message: "Desenvolvendo aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "EJS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "Muito Fácil de Usar"
    },
    {
      title: "A",
      message: "Ajuda demais"
    },
    {
      title: "I",
      message: "install ejs"
    },
    {
      title: "S",
      message: "Salvador"
    },
  ];
  const subtitle = 'Uma linguagem de modelagem para criação de página HTML utilizando JavaScript';
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

//rota sobre
app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Servidor Funcionando");