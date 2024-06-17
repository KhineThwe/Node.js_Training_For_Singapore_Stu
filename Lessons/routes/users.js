const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("User List");
 })
 
 router.get('/now',(req,res)=>{
     res.send("User New Form");
 })

router.post("/",(req,res)=>{
    res.send("Create User");
})

//same1
router.get("/:id",(req,res)=>{
    console.log(req.user)
    res.send(`User Get With Id ${req.params.id}`)
})

//same2
router.put("/:id",(req,res)=>{
    res.send(`Update User With Id ${req.params.id}`)
})

//same3
router.delete("/:id",(req,res)=>{
    res.send(`Delete User With Id ${req.params.id}`)
})

//same1+same2+same3 = short form
//short form
// router.route(":id").get((req,res)=>{
//     res.send(`User Get With Id ${req.params.id}`)
// }).put("/:id",(req,res)=>{
//     res.send(`Update User With Id ${req.params.id}`)
// }).delete("/:id",(req,res)=>{
//     res.send(`Delete User With Id ${req.params.id}`)
// })

const users = [{name:"Kyle"},{name:"Shally"}]
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next()
})
 module.exports = router