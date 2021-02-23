/**
 * What is EJS?
 * -EJS stands for Embedded JavaScript.
 * -EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
 * -It's a module in npm.
*/

const express = require("express");
const app = express();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) =>{
    // res.send("This is homepage.");
    res.render("index.ejs");
});

app.get("/response", (req, res) =>{
    // console.log(req.query); //{ fullname: 'peterWang', age: '25' }
    let { fullname, age } = req.query;
    res.send("thanks for sending request.");
});

//示範如何傳值給view
// app.get("/:name", (req, res) => {
//     let { name } = req.params;
//     res.render("person.ejs", {name : name}); // 當物件key與value相同時,可簡略為{ name }即可表示
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});









