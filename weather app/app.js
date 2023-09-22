const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.cityName);
  const query = req.body.cityName;
  const apikey = "cb2baa288e1527c53508f3cb2a8aca67";
  const unit = "metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit;
  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDiscription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const url_icon = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log(weatherData);
      console.log(weatherDiscription);
      console.log("Londaon Temp: " + temp);
      // res.send(weatherData);
      res.write(`<p>Details are  ${weatherDiscription}<p>`);
      res.write(`<h1>The ${query} Temperature right now is: ${temp} degrees<h1>`);
      res.write(`<img src=${url_icon} />`);
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Weather App Server has started on port: ${port}`);
});
