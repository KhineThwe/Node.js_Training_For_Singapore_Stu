const express = require("express");
const router = express.Router();


router.get("/",(req,res)=>{
    res.send("User List");
})

router.get("/now",(req,res)=>{
    res.send("User New Form")
})

router.post("/createuser",(req,res)=>{
    res.send("Create User")
})

router.get("/:id",(req,res)=>{
    res.send(`User Get With Id ${req.params.id}`)
})

router.put("/:id",(req,res)=>{
    res.send(`User Get With Id ${req.params.id}`);
})

router.delete("/:id",(req,res)=>{
    res.send(`Delete User With Id ${req.params.id}`)
})

module.exports = router