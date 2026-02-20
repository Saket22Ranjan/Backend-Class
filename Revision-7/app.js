let { URL }=require('url');

// let url=new URL("https://localhost:300/path/abc?name='Saket'#section");




let newurl="http://example.com:8080/path/path/test1?user=abc&id=1212#about";

let url =new URL(newurl);

console.log(url.host);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
console.log(url.port);
console.log(url.protocol);
console.log(url.searchParams.get('user'));
console.log(url.searchParams.get('id'));


// fs,url,http server module wrapper