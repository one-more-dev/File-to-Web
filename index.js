// primeiro: um conversor de texto bruto, que apenas respeita as diferentes linhas
    // depois um que converte para a web
// segundo: TRATAR O TEXTO COMO UM TODO, AS LINHAS E TUDO MAIS
const managingFiles = require("./modules/fileManager");

(async ()=>{
    let texto = await managingFiles.readFile("/home/akim-the-second/Desktop/wikipediaPhilosophy.txt");
    console.log("Meu texto\n",texto);
}) ()