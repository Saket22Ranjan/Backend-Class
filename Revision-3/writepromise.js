let fs=require('fs/promises');
let path=require('path');

fs.writeFile(path,"fs/promise module write fn")
.then(()=>{
    console.log("done writing...");
})
.catch((err)=>{
    console.log(err.toString());
});