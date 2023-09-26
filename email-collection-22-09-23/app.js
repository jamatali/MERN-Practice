const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // console.log("post request Respons1: " + req.body.fname);
  // console.log("post request Respons2: " + req.body.lname);
  // console.log("post request Respons3: " + req.body.email);
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  // console.log("Your First Name: " + fname);
  // console.log("Your Last Name: " + lname);
  // console.log("Your Email Id: " + email);
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us21.api.mailchimp.com/3.0/lists/df3323f776";
  const options = {
    method: "post",
    auth: "Jamat:ae002b99870f7f0752f9458fc1bb9127-us21",
  };
  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      const pData = JSON.parse(data);
      console.log(pData);
    });
  });
  request.write(jsonData);
  request.end();
  res.send(
    `You Have Entered First Name: ${fname}, Last Name: ${lname} and Email: ${email} This is ${jsonData}`
  );
});

app.listen(port, () => {
  console.log(`Email Collection App is running on Port: ${port}`);
});

// API_KEY--MailChimp
// ae002b99870f7f0752f9458fc1bb9127-us21

// List Id
// df3323f776
