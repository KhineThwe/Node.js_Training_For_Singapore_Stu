const express = require("express");
const router = express.Router();
router.use(logger);

router.get('/',(req,res)=>{
    console.log(req.query.name);
    res.send("User List");
 })
 
 router.get('/new',(req,res)=>{
    //  res.send("User New Form");
    res.render("users/new",{firstName: "Test"})
 })

router.post("/",(req,res)=>{
    // res.send("Create User");
    const isValid = true;
    if(isValid){
        users.push({firstName:req.body.firstName});
        res.redirect(`/users/${users.length-1}`)
    }else{
        console.log("Error");
        res.render("users/new",{firstName:req.body.firstName})
    }
    console.log(req.body.firstName);
    res.send("Hi");
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

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}

const users = [{name:"Kyle"},{name:"Shally"}]
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next()//continue to other function
})
 module.exports = router