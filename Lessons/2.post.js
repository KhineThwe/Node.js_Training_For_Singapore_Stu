const Joi = require('joi');
const express = require("express"); //it returns fun

const app = express(); //it represents application

app.use(express.json());//adding middleware

const courses = [
    {id : 1, name: 'course1'},
    {id : 2, name: 'course2'},
    {id : 3, name: 'course3'}
  ]

  app.post('/api/courses', (req, res) => {
    //To use Joi,we have to define schema first
    const schema = Joi.object({
        name: Joi.string().min(3).required()
      });

    //validate method() return
    const { error, value } = schema.validate(req.body);

    console.log(error);

    if (error) {
        // handle validation error
        res.status(400).send(error.details[0].message);
        //console.log('Validation error:', error.details);
        return;
      } else {
        // proceed with valid data
        console.log('Validated data:', value);
      }
    
    //simple validation part the first one
    // if(!req.body.name || req.body.name.length < 3){
    //    //400 Bad Request
    //    res.status(400).send('Name is required and should be minimum 3 characters');
    //    return;
    // }
    const course = {
      id: courses.length + 1,
      name: req.body.name
    };
    courses.push(course);
    res.send(course);
  });
//Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
// app.post()

// app.put()

// app.delete()
