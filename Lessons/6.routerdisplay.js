const Joi = require('joi');
const express = require('express'); // it returns fun

const app = express(); // it represents application

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index",{text:"World"})
})

const userRouter = require('./routes/users')

app.use("/users",userRouter);

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
