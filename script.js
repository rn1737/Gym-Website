console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World'); 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});     

const fs=require("fs");
let text =fs.readFile("dele.txt","utf-8",(a,b)=>{ 
  console.log(a,b);
});
console.log("this is a message");  

const http=require('http') 
const fs=require('fs') 
const fileContent=fs.readFileSync('hello Ritesh')  

const server =http.createServer((req,res)=>{ 
  res.writHead(200,{'Content-type':'text/html'});
  res.end(FileContent) 
}) 
server.listen(80,'127.0.0.1',()=>{ 
  console.log("Listening on port 80")
})      
