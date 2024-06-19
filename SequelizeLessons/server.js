const express = require("express");
const cors = require('cors');
const app = express()

var corOptions = {
    origin : 'https://localhost:3000'
}

//middleware
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))


//testing

app.get("/",(req,res)=>{
    res.json({message: 'hello from api'})
})

//port 
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})