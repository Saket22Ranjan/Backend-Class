let fs=require ('fs');
let path=__dirname+'/a.txt';

fs.writeFile(path,"learning fs module write fn",(err)=>{
   if(err)
    console.log(err)
else
    console.log("write successfully...") 

});
