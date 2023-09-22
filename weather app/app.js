const express = require("express");
const app = express();
const https = require("https");
const port = 3000;

app.get("/", (req,res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=cb2baa288e1527c53508f3cb2a8aca67&units=metric";
    https.get(url, (response) =>{
        console.log(response.statusCode);
        response.on("data", (data)=>{
            const weatherData = JSON.parse(data);
            const temp =weatherData.main.temp;
            const weatherDiscription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const url_icon = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(weatherData);
            console.log(weatherDiscription);
            console.log("Londaon Temp: " + temp);
            // res.send(weatherData);
            res.write(`<p>Details are  ${weatherDiscription}<p>`);
            res.write(`<h1>The London Temperature right now is: ${temp} degrees<h1>`)
            res.write(`<img src=${url_icon} />`)
            res.send();
        })
    })
    // res.send("hello")
})

app.listen(port, () => {
    console.log(`Weather App Server has started on port: ${port}`)
})