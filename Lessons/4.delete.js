const Joi = require('joi');
const express = require('express'); // it returns fun

const app = express(); // it represents application

app.use(express.json()); // adding middleware

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.delete('/api/courses/:id',(req,res)=>{
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }

    //Delete
     const index = courses.indexOf(course);
     courses.splice(index,1);//remove object from courses array by using splice method//1 means remove one object


    //Return the same course
    res.send(course);
});

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
