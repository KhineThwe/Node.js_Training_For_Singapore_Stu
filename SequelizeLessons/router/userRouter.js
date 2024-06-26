const userRouter = require("express").Router();
const userController = require("../controller/userController");

userRouter.get("/",(req,res)=>{
    res.json({message: 'hello from api'})
})


userRouter.post("/",userController.addNewUser);

module.exports = userRouter;