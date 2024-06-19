const express = require("express");
const app = express();

//Set the view engine to EJS
//View engine -- > ejs,pug,handlebars,etc
app.set('view engine','ejs')
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended:true}))

app.get("/ejs",(req,res)=>{
    let data = {
        name: "Khine",
        hobbies: ['playing game','playing chess','cycling']
    }
    //res.render("index");
    // res.render("index",{name:"Khine"});//render the 'index' view from the '/views directory'
    res.render("index",{data:data});
})

app.get('/',(req,res)=>{
    res.render('form.ejs')
})

app.post('/greet',(req,res)=>{
    const {username} = req.body;
    res.render('result.ejs',{username})
})

const port = 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});
