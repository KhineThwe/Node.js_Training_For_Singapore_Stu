const Joi = require('joi');
const express = require('express'); // it returns fun
const app = express(); // it represents application

app.use(express.static("public"))
//We have to use middleware,this allows access information coming from form
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//for view engine
app.set("view engine","ejs");

const userRouter = require('./routes/users')

app.use("/users",userRouter);


// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
