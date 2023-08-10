const fs = require("fs");
const path = require("path");
const chalk = require("chalk");


const pathway = process.argv;


const readFile = async (fileToRead) => {
    const file = path.parse(fileToRead);
    try{
        let fileToRead = await fs.promises.readFile(path.join(file.dir,file.base), "utf8");
        return fileToRead;
    }catch(erro){
        console.log("Something occured while accesing the file: "+ chalk.red(erro));
    }
}



const validatingFile = async (pathToFile = pathway[2]) => {
    try{
        fs.lstatSync(pathToFile)
	}catch(erro){
		if(erro.code === "ENOENT"){
			return console.log(chalk.yellow(`This file appearently doesn't exist`));	
		}
        return console.log('An error occured: ' + chalk.red(erro));
	}

    if(!fs.lstatSync(pathToFile).isFile()){
        return console.log("The inserted path is not a file. Please, try again")
    }
    //const arquivoSerLido = await readFile(pathToFile);
    //return arquivoSerLido;
    return readFile(pathToFile);
}


const fsCallback = (erro, sucededMsg) =>{
    if(erro){
        if(erro.code === 'EEXIST'){
            return console.log("This path exists already, using it instead of creating");
        }
        return console.log(`The following error occured: ` + chalk.red(erro));
    }
    console.log(sucededMsg.length);
}

module.exports = {
    validatingFile,
    readFile,
}