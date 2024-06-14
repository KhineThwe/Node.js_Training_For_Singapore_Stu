const express = require("express");

const app = express();


const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
]

app.get("/",function(request,response){
    response.send("Hello");
})

//select all
app.get("/api/select",(req,res)=>{
    res.send("Hello Selecting result");
})

app.get("/api/selectAllCourses",(req,res)=>{
    res.send(courses);
})


//select one
app.get("/api/course/:id",(req,res)=>{
    // res.send(req.params.id);

    var course = courses.find(c=>c.id === parseInt(req.params.id));
    if(course){
        res.status(200).send(course);
    }else{
        return res.status(404).send(`The course with the given ${req.params.id} was not found`); 
    }
})


const port = 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});





