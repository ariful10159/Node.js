// os , path 
// os, path
const os= require("os");
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());



//path

// console.log(__dirname);
// console.log(__filename);

const path = require("path");
console.log(path);


const extensionName = path.extname("index.html");
console.log(extensionName);


const joinName = path.join(__dirname + "/views");
console.log(joinName);





// const http = require('http');
// const port = 3000;
// const hostname = '127.0.0.1'

// const myServer = http.createServer((req,res)=>{
//     res.end("<h1>Hello </h1>");
// });

// myServer.listen(port, hostname, ()=>{
//     console.log(`server is running successfully at http://${hostname}:${port}`);
// });
