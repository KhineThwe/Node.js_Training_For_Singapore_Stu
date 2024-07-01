const userRouter = require("express").Router();
const userController = require("../controller/userController");

userRouter.get("/",(req,res)=>{
    res.json({message: 'hello from api'})
})


userRouter.post("/addUser",userController.addNewUser);
userRouter.get("/getAllUser",userController.getAllUser);
userRouter.get("/getUser/:id",userController.getUser);
userRouter.put("/updateUser/:id",userController.updateUser);
userRouter.delete("/deleteUser/:id",userController.deleteUser);

module.exports = userRouter;