const express = require("express");
const mysql = require("mysql");
const app = express();

//Create connection
const db = mysql.createConnection({
    host: "127.0.0.1",//instead of localhost
    user: "root",
    password: "admin",
    database:'nodemysql'
});

//Connect
db.connect((err)=>{
   if(err){
      throw err;
   }
   console.log('Mysql Connected.....')
});

//Create DB
// app.get('/createdb',(req,res)=>{
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql,(err,result)=>{
//           if(err) throw err;
//           console.log(result);
//           res.send('Database created ....');
//     })
// })

//Create table
// app.get('/createposttable', (req, res) => {
//     let sql = `
//         CREATE TABLE posts (
//             id INT AUTO_INCREMENT,
//             title VARCHAR(255),
//             body VARCHAR(255),
//             PRIMARY KEY (id)
//         )
//     `;
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send("Posts table created.....");
//     });
// });


//Insert post 1
app.get('/addpost1',(req,res)=>{
    let post = {title:"Post two",body:"This is post number two"};
     let sql = `
       INSERT INTO posts SET ?
     `;

     let query = db.query(sql,post,(err,result)=>{
         if(err) throw err;
         console.log(result);
         res.send('Post 1 added....');
     })
})


//Select posts
app.get('/getposts',(req,res)=>{
     let sql = `
       SELECT * FROM posts
     `;

     let query = db.query(sql,(err,results)=>{
         if(err) throw err;
         console.log(results);
         res.send('Posts fetched....');
     })
})

//Select posts
app.get('/getpost/:id',(req,res)=>{
     let sql = `
       SELECT * FROM posts WHERE id = ${req.params.id}
     `;

     let query = db.query(sql,(err,results)=>{
         if(err) throw err;
         console.log(results);
         res.send('Posts fetched....');
     })
})

//Update
app.get('/updatepost/:id',(req,res)=>{
    let newTitle = 'Updated Title';
    let sql = `
      UPDATE posts SET title='${newTitle}' WHERE id = ${req.params.id}
    `;

    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('UPDATED....');
    })
})

//Delete
app.get('/deletepost/:id',(req,res)=>{
    let sql = `
      DELETE FROM posts WHERE id = ${req.params.id}
    `;

    let query = db.query(sql,(err,results)=>{
        if(err) throw err;
        console.log(results);
        res.send('Posts deleted....');
    })
})

// question mark like a placeholder


const port = 3000;
app.listen(port,()=>{console.log(`Listening on port ${port}`)});
