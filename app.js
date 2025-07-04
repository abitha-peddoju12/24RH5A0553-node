const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'));
})
app.get('/blog',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/blog.html'));
})
app.listen(PORT,()=>{
    try{
    console.log(`Server is Running on port ${PORT}`);
    }
    catch (error) {
        console.log(error);
    }
})