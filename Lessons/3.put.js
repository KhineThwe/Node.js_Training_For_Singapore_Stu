const Joi = require('joi');
const express = require('express'); // it returns fun

const app = express(); // it represents application

app.use(express.json()); // adding middleware

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course with the given ID was not found');
    }

    // Validation Part
    const { error, value } = validateCourse(req.body); // object destructuring

    if (error) return res.status(400).send(error.details[0].message);
    
    // Update Course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    // Validate
    // If invalid, return 400 - Bad Request
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

// Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
