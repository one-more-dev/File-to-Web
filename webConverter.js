const express = require('express');
const app = express();
const fileManager = require("./modules/fileManager");
const port = 8080;
// 1: pegar um texto X qualquer e adicionar no arquivo
// 2: passar para um P gigante


app.set("view engine", "ejs");

const pathForTest = "/home/akim-the-second/Desktop/wikipediaPhilosophy.txt"

app.get("/", async (req, res) =>{
    let arquivo = await fileManager.readFile(pathForTest);
    res.render("index", {
        p: arquivo
    });
})

app.listen(port, console.log("Running in port ",port))

// Carrega o arquivo primeiro, e o salva em algum lugar
// depois renderiza
