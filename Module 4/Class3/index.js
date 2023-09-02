const mongoose = require("mongoose")


const password = "tKLXiT0zQQ2BHUhG";

const db = `mongodb+srv://apankit1999:${password}@cluster0.5hte5cj.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(db)
.then(()=>{
    console.log("Connect Establishment")
})
.catch((err)=>{
    console.log(err);
})