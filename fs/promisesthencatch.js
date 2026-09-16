const fs=require("fs").promises;
async function writeFile(){
    try{
        await fs.writeFile("promises.txt","Hello Students!");
        console.log("File created and data written successfully.");

    }catch(error){
        console.log("Error:",error);
    }
}
writeFile();
async function readFile() {
    try{
        const data =await fs.readFile("promises.txt","utf8");
        console.log("file content:");
        console.log(data);

    }catch(error){
        console.log("error:",error);
    }
    
}
readFile();
async function appendFile() {
    try {
        await fs.appendFile("promises.txt","\nWelcome to FSD training.");
        console.log("data appended successfully.");
    }catch(error){
        console.log("error:",error);
    }
    
}
appendFile();

async function renameFile() {
    try{
        await fs.rename("promises.txt",promises_new.txt);
        console.log("file renamed successfully.");

    }catch(error){
        console.log("error:",error);
    }
    
}
renameFile();
async function deleteFile() {
    try{
        await fs.unlink("promises_new1.txt");
        console.log("file deleted successfully.");

    }catch{
        console.log("error",error);
    }
    
}
deleteFile();