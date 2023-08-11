const express = require('express');
const fileManager = require("./modules/fileManager");
const fileTitle = require("./modules/fileOptions");
const app = express();
require('dotenv').config()

const port = 8080;
const pathForTest = process.env.WORKINGPATH2;
// pegar o conteudo (em lista por exemplo) e dividir se assim eu desejar
// estilizar

app.set("view engine", "ejs")


app.get("/", async (req, res) =>{
    let arquivo = await fileManager.treatingFile(pathForTest)
    res.render("index", {
        titulo: fileTitle.pageTitle(pathForTest),
        arquivo: arquivo
    });
})

app.listen(port, console.log("Running in port ",port))
