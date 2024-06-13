const express = require("express"); //it returns fun

const app = express(); //it represents application

const courses = [
    {id : 1, name: 'course1'},
    {id : 2, name: 'course2'},
    {id : 3, name: 'course3'}
  ]
app.get("/", (req, res) => {
  res.send("Hello World");
});
//it takes two argument ,path and second argument is callback fun
//callback fun has two arguments -> request and response

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//for single course
app.get("/api/course/:id", (req, res) => {
    // Find the course by ID
    var course = courses.find(c => c.id === parseInt(req.params.id));
  
    // If course not found, return 404
    if (!course) {
      return res.status(404).send('The course with the given ID was not found');
    }
  
    // If course found, return the course
    res.send(course);
  });
  

app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);
  });

  

  app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);
  });
  

//Port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
// app.post()

// app.put()

// app.delete()
