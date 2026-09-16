const fs=require('fs');
fs.writeFile('sample.txt','welcome to full stack development',(err)=>{
if(err){
    console.log('Error creating file:',err);
    return;
}
console.log('file created successfully!');
}
)
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('file content:');
    console.log(data);
})
//append
fs.appendFile('sample.txt','\nSemester : 3',(err)=>{
    if(err){
        console.log('Error updating file:',err);

    }else{
        console.log('\n3. file updated successfully!');
    }
})
//updated read
fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.log('error reading file:',err);
        return;
    }
    console.log('file content:');
    console.log(data);
})
//fs.unlink('example.txt').(err)=>{}
    fs.unlink('sample.txt',(err)=>{
        if(err){
        console.log('error deleting file:',err);
        return;
        }
        console.log('file deleted successfully!');
    })