const fs=require('fs');
fs.writeFileSync('secastudent.txt','this is the exp ','utf-8');
console.log('file is written successfully');
//read
const data=fs.readFileSync("secastudent.txt",'utf-8');
console.log('file content is given as:',data);
//append
fs.appendFileSync('secastudent.txt','\n This is the new line added ','utf-8');
console.log('File is appended');
fs.unlinkSync('example.txt');
console.log('file is deleted successfully');
if(fs.existsSync('secastudent.txt')){
    console.log('file exists');
}else{
    console.log('file not found, need to create this file');
}