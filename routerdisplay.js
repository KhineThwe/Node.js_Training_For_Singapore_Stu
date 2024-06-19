const express = require("express");
const app = express();
app.set('view engine','ejs')
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:true}))


//import router 
const userRouter = require('./routes/user')

//user/now

app.use("/users",userRouter);

const port = 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});
