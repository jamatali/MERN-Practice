const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
app.post("/",(req,res)=>{
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send(`The Sum of Given numbers = ${result}`)
})
app.get('/bmiCalculator', (req,res)=>{
    res.sendFile(__dirname + '/bmiCalculator.html');
})
app.post("/bmiCalculator",(req,res)=>{
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var height = num2 * 0.0254;
    var bmi = num1 / (height * height);
    res.send(`Your BMI = ${bmi}`)
})
    
app.listen(port, () =>{
    console.log(`The Node Server You Created has been started on Port: ${port}`);
})