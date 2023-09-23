const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req,res)=>{
    console.log("post request Respons: " + req)
    // const fname = req.body.fname;
    // const lname = req.body.lname;
    // const email = req.body.email;
    // console.log("Your First Name: " + fname);
    // console.log("Your Last Name: " + lname);
    // console.log("Your Email Id: " + email);
    
})


app.listen(port, () => {
    console.log(`Email Collection App is running on Port: ${port}`)
})