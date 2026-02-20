let http=require('http');

let server=http.createServer((req,res)=>{
    res.write("learning node js http to craete server");
    res.end();
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");

})