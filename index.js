const express = require('express');
const fileManager = require("./modules/fileManager");
const fileTreatment = require("./modules/fileTreatment");
const fileTitle = require("./modules/fileOptions");
const app = express();
require('dotenv').config()

const port = 8080;      //process.env.WORKINGPATH1;


app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req,res)=>{
    res.render("index")
})

// se for lista eu confiro a ordem
app.post("/file", async (req,res)=>{
    const formData = req.body
    let arquivo = null
    console.log(formData)

    try{
        if(formData.formato === 'lista'){
            arquivo = await fileTreatment.fileToList(
                formData.path,
                formData.list_order,
                Boolean(formData.lines),
                formData.list_separator
            )
        }else if(formData.formato === 'texto'){
            arquivo = await fileManager.treatingFile(formData.path, Boolean(formData.lines))
        }
    }catch(erro){
        res.render("filePage",{
            titulo: "",
            erro: erro.message,
            arquivo: ""
        })
        console.log(erro.message)
    }

    res.render("filePage", {
        tipoDeArquivo: formData.formato,
        separador: formData.list_separator,
        titulo: fileTitle.pageTitle(formData.path),
        arquivo
    })
})


app.listen(port, console.log("Running in port ",port))
