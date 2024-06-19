const { name } = require("ejs");
const express = require("express");
const Joi = require("joi");

const app = express();

app.use(express.json())


const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
]

//CRUD start
app.get("/",function(request,response){
    response.send("Hello");
})

//select all
// app.get("/api/select",(req,res)=>{
//     res.send("Hello Selecting result");
// })

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

//post with simple validation 
app.post("/api/courses",(req,res)=>{
    const course ={
        id : courses.length+1,
        name: req.body.name
    };
    //simple validation part
    if(!req.body.name || req.body.name.length < 3){
        //400 Bad Request
        res.status(400).send("Name is required and should be minimum 3 characters");
        return;//terminate
    }
    courses.push(course);
    res.send(course);
})


//post with joi validation 
app.post("/api/courses/joi",(req,res)=>{
    //joi validation part
    //Firstly,to use joi,we have to define schema first
    // const schema = Joi.object({
    //     name: Joi.string().min(3).required()
    // })
    const course ={
        id : courses.length+1,
        name: req.body.name
    };

    const {error,value} =validateCourse(req.body)//destructuring 
    if(error) return res.status(400).send(error.details[0].message);
    courses.push(course);
    res.send(course);
})

//put method 
app.put('/api/courses/:id',(req,res)=>{
    //Lookup the course
    //If not existing,return 404
    var course = courses.find(c=>c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with the given ID was not found");
    
    //Validation part
    const {error,value} =validateCourse(req.body)//destructuring 
    if(error) return res.status(400).send(error.details[0].message);

    //Update Course
    course.name = req.body.name;
    //Return updated course
    res.send(course);
})

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    })
    return schema.validate(course);
}

app.delete("/api/courses/:id",(req,res)=>{
    //Lookup the course
    //If not existing,return 404
    const course = courses.find(c=>c.id === parseInt( req.params.id));
    if(!course){
        return res.status(400).send("The course with the given ID was not found");
    }

    //Delete***
    const index = courses.indexOf(course);
    courses.splice(index,1);

    //Return the course
    res.send(course);
})
//CRUD end

const port = 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});





