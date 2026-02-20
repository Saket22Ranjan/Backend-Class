let http=require('http');
let server=http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(res.headers);

    res.statusCode=205;
    res.write("learning http server");
    res.end();
});

server.listen(3000,()=>{
    console.log('Server is running at port 3000');
});

