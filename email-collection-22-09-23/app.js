const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req,res)=>{
    console.log("post request Respons1: " + req.body.fname);
    console.log("post request Respons2: " + req.body.lname);
    console.log("post request Respons3: " + req.body.email);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    console.log("Your First Name: " + fname);
    console.log("Your Last Name: " + lname);
    console.log("Your Email Id: " + email);
    res.send(`You Have Entered First Name: ${fname}, Last Name: ${lname} and Email: ${email}`);
})


app.listen(port, () => {
    console.log(`Email Collection App is running on Port: ${port}`)
})