const db = require("../models/index");
const userService = require("../service/userSerive");

const addNewUser = async(req,res)=>{
    let data = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
    };
    await userService.addUser(data);
    res.json({message:"Created User Successfully!!!"})
}

module.exports={
    addNewUser
}