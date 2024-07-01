const db = require("../models/index");
const userService = require("../service/userService");

const addNewUser = async(req,res)=>{
    let data = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
    };
    await userService.addUser(data);
    res.json({message:"Created User Successfully!!!"})
}

const getAllUser = async (req,res)=>{
  const users =  await userService.getAllUser();
  res.json({data:users})
}

const getUser = async(req,res)=>{
    const id = req.params.id;
    const user = await userService.getUser(id);
    res.json({data:user});
}

const updateUser = async(req,res)=>{
    const id = req.params.id;
    let data = {
        first_name: req.body.first_name,
        last_name:req.body.last_name,
    };
    const user = await userService.updateUser(data,id);
    res.json({data:user});
}

const deleteUser = async(req,res)=>{
    const id = req.params.id;
    const user = await userService.deleteUser(id);
    res.json({data:user});
}

module.exports={
    addNewUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}