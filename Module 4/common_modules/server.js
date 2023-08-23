const http = require("http");

// console.log(http);

let data={"name":"Ankit"}

const server= http.createServer((req,res)=>{
    console.log("Server has been started")
    // console.log(req);
    // console.log(res);
    // res.end("Hello world")
    // res.end("<h1>Hello World Ankit</h1>")
    res.end(JSON.stringify(data))
})

server.listen(8080);