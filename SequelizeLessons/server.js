const express = require("express");
const cors = require('cors');
const app = express()

require("dotenv").config();
//userRouter 
const userRouter = require("./router/userRouter");

var corOptions = {
    origin : 'https://localhost:8000'//frontend address and port no
}

//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//with Router
app.use("/user",userRouter);

//port 
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})