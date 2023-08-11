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

const treatingFile = async (file) => {
    const linebreak = /\n/gm;
    try{
        let arquivoValidado = await validatingFile(file);
        arquivoValidado = arquivoValidado.split(linebreak);
        return arquivoValidado;
    }catch(erro){
        const errorMessage = `An Error on treating the file occurred: ${erro.message}`;
        console.log(errorMessage)
        return [errorMessage]
    }
}

const validatingFile = async (pathToFile = pathway[2]) => {
    try{    // STEP 1: Checking Path veracity
        fs.lstatSync(pathToFile)
	}catch(erro){
		if(erro.code === "ENOENT"){
            throw Error(chalk.red(`This file appearently doesn't exist`))
		}
        throw Error(chalk.red(erro.message));
	}

    if(!fs.lstatSync(pathToFile).isFile()){     // STEP 2: Checking if it is a file
        throw Error(chalk.red("This path is not a (readable) file. Try another path"))
    }
    let arquivoValidado = await readFile(pathToFile)    // SUCESS CASE
    return arquivoValidado;
}


module.exports = {
    readFile,
    treatingFile,
}