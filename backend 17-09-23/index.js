import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// const fs = require ("fs");

// // fs.writeFile("message.txt", "Hello node js", (err) => {
// //     if(err) throw err;
// //     console.log("file has been saved");
// // })
// fs.readFile("./message.txt", "utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
inquirer
  .prompt([{ message: "Type Your URL", name: "URL" }])
  .then((answers) => {
    // console.log(answers)
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URL.txt", url , (err) => {
    if(err) throw err;
    console.log("file has been saved");
})
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
