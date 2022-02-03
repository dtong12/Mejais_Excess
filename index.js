const express = require('express');
const { Mongoose } = require('mongoose');
const app = express();
const path = require("path");


Mongoose.connect("mongodb://localhost:27017/shopApp", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo connection open!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTINO ERROR !!!!!!");
        console.log(err);
    })

    
app.set("views", path.join(__dirname, "views"));
app.set("view engine", 'ejs')

app.get("/dog", (req,res) => {
    res.send("woof");
})

app.listen("3000", () =>{
    console.log("app is listening on port 3000");
})

