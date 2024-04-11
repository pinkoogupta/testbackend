require('dotenv').config()

console.log("hello backend");
const express =require('express')

const app=express()
const port=4000;
//  const PORT =process.env.PORT || 8000

 app.get('/',(req,res)=>
{
    res.send("hello world");
})

app.get('/twitter',(req,res)=>{
    res.send('rishudotcom');
})
app.get('/login',(req,res)=>{ 
    res.send('<h1>please login at rishu home</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`example app listening on port ${port}`);
})
