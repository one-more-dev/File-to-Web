const { treatingFile } = require("./fileManager");
require('dotenv').config();


const fileToList = async (file,orderby="default_value",includeLines = false,separator = ":") => {
    let listFile = treatingFile(file,includeLines)
    .then(
        function(arquivo){
            arquivo = arquivo.map(line => line.trim())  // cleaning the lines first
            if(orderby === "a_z"){                      // ordering, if requested
                arquivo = arquivo.sort()
            }else if(orderby === "z_a"){
                arquivo = arquivo.sort().reverse()
            }
            arquivo = arquivo.map(line => line.split(separator))   // dividing in a table

            return arquivo;
    })
    .catch(function(erro){ console.log("Final Error: ",erro) })
    
    return listFile;
}


module.exports = { fileToList }