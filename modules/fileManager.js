// pegar um arquivo já existente
// 

const fs = require("fs");
const path = require("path");
// retorna um arquivoSelecionado || arquivo.teste
    // 2: Se o arquivo for uma pasta
const pathway = process.argv;


const readFile = (fileToRead) => {
    const file = path.parse(fileToRead);
    fs.readFile(path.join(file.dir,file.base), "utf8", (erro,data) =>{
        fsCallback(erro,`Reading the file:\n\n${data}`);
    })
}


const textFile = () => {
    try{
        fs.lstatSync(pathway[2])
	}catch(erro){
		if(erro.code === "ENOENT"){
			return console.log(`This file appearently doesn't exist`);	
		}
        return console.log(`An error occured: ${erro}`);
	}

    if(!fs.lstatSync(pathway[2]).isFile()){
        return console.log("The inserted path is not a file. Please, try again")
    }
    
    readFile(pathway[2]);
}


function buildDir(){
    fs.mkdir(path.join(__dirname,"localFilesDir"), (erro) =>{
        if(erro){
            return console.log("The following error occured: ",erro);
        }
        console.log("Directory created");
    })
}

function makeFile(){
 //   fs.writeFile(path.join(__dirname,""))
}


const fsCallback = (erro, sucededMsg) =>{
    if(erro){
        if(erro.code === 'EEXIST'){
            return console.log("This path exists already, using it instead of creating");
        }
        return console.log(`The following error occured: `,erro);
    }
    console.log(sucededMsg);
}


module.exports = {
    textFile,
}