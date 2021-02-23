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
    const languages = [
        { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
        { name: "Java", rating: 8.6, popularity: 8.2, trending: "same" },
        { name: "C++", rating: 6.6, popularity: 7.7, trending: "same" },
        { name: "PHP", rating: 2.5, popularity: 4.7, trending: "decreasing" },
        { name: "JavaScript", rating: 8.5, popularity: 8.1, trending: "same" },
    ];
    
    // res.send("This is homepage.");
    res.render("index.ejs");
});

app.get("/response", (req, res) =>{
    // console.log(req.query); //{ fullname: 'peterWang', age: '25' }
    let { fullname, age } = req.query;
    // res.send("thanks for sending request.");
    res.render("respond.ejs", {fullname, age});
});

//示範如何傳值給view
// app.get("/:name", (req, res) => {
//     let { name } = req.params;
//     res.render("person.ejs", {name : name}); // 當物件key與value相同時,可簡略為{ name }即可表示
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});









