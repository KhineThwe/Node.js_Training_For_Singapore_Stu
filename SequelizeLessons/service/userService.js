const db = require("../models/index");
const user_table = db.user_table;

const addUser =  async(data)=>{
    const user = await user_table.create(data);
    return user;
}

const getAllUser = async(data)=>{

}

const getUser = async(data)=>{

}

const updateUser = async(data)=>{

}

const deleteUser = async(data)=>{

}

module.exports = {
    addUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
}