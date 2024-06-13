const express = require('express');//it returns fun

const app = express();//it represents application

app.get('/',(req,res)=>{
   res.send('Hello World');
})
//it takes two argument ,path and second argument is callback fun
//callback fun has two arguments -> request and response

app.get('/api/courses',(req,res)=>{
   res.send([1,2,3,4]);
})

app.listen(3000,()=>console.log('Listening on port 3000'));
// app.post()

// app.put()

// app.delete()