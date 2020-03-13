const express = require("express");
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');

app.get("PORT", 3000);
app.set('view engine', 'hbs');

app.use("/", require("./routes/index.js"));
app.use("/", require("./routes/movies.js"));

app.listen(app.get("PORT"), ()=>{
    console.log("app listening on", app.get("PORT"));
});

hbs.registerPartials(__dirname + '/views/partials');

mongoose.connect('mongodb://localhost/video', {
    
}