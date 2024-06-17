const express = require("express");
//const path = require("path");

const app = express();

//View Engine Setup: You need to set up a view engine such as EJS, Pug, Handlebars, etc.
//Views Directory: Make sure the path to your views directory is correctly specified.
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory
// app.set('views', path.join(__dirname, 'Lessons/views'));

// Route to render the index view
app.get("/", (req, res) => {
    console.log("Here");
    //res.render("index"); // Render the 'index' view from the '/views' directory
    res.render("index",{text:"World"});
});

app.get('/users',(req,res)=>{
   res.send("User List");
})

app.get('/users/now',(req,res)=>{
    res.send("User New Form");
})
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
