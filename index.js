const express = require('express');
const app = express();
const fileManager = require("./modules/fileManager");
const testingRouter = require("./routes/testingRoute");

const port = 8080;
const pathForTest = ""

app.set("view engine", "ejs");


app.get("/", async (req, res) =>{
    let arquivo = await fileManager.treatingFile(pathForTest)
    res.render("index", {
        arquivo: arquivo
    });
})

app.use("/", testingRouter);    //localhost:8080/test


app.listen(port, console.log("Running in port ",port))
