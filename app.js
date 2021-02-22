/**
 * What is EJS?
 * -EJS stands for Embedded JavaScript.
 * -EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
 * -It's a module in npm.
*/

const express = require("express");
const app = expree();
const ejs = require("ejs");

// middleware
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.send("This is homepage.");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});









