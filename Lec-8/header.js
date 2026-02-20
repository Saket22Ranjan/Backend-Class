let http=require('http');

let server=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(req.headers);
    res.statusCode=204;
    res.write("http headers" );
    res.end();

})

server.listen(3000,()=>{
    console.log("server is listening on port 3000");
})