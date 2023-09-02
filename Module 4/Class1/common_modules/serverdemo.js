const http=require("http");


const serverdemo=http.createServer((req,res)=>{
    console.log("Your server s started");
})


serverdemo.listen(5000);