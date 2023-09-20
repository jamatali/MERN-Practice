const express = require("express");
const app = express(); 
const port = 3000;
app.get('/', (req,res)=>{
    // console.log(req);
    // res.send(`Hello Guys You are communicating through Port: ${port} and your request ${req}`);
    res.send("<h1>Hello Guys What is express</h1>");
})
app.get("/contact", (req,res) => {
    res.send("Contact Us at: engr.jamatali@gmail.com");
})
app.get("/about", (req,res)=>{
    res.send("I am Jamat Ali an Electronics Engineer");
})
app.get("/users",(req,res)=>{
    res.send("There is no Registered User");
})
app.listen(port, function(){
    console.log(`Server Started on port ${port}`);
});