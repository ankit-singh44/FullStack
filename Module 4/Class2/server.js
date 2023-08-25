const express = require("express");

const app = express();


// I want to make a logg
// app.use((req,res,next)=>{
//     console.log(req.method,req.ip,req.hostname,new Date());
//     next(); 
// })

const auth = (req,res,next)=>{
    console.log(req.query)
    let password=req.query.password;
    if(password=="123"){
        next();
    }
    else{
        res.send("you are not authorized person")
    }
}

// app.use(auth);  // app.use methos is used to invoke middleware withing whole application

//endpoint
app.get("/users",auth,(req,res)=>{
    // res.send("Hello World");
    // res.send("<h1>Hello world in h1 heading</h1")
    res.send({"type":"Ankit"})
    // res.send({'type':"GET"})
})

app.post("/",(req,res)=>{   
    res.send({"type":"POST"});
})

app.put("/",(req,res)=>{
    res.send({"type":"PUT"})
})

app.delete("/",(req,res)=>{
    res.send({"type":"DELETE"})
})

app.listen(8082,()=>{
    console.log("Server has started at 8082")
})

