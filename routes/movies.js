const express = require("express");
const app = express();
const Movie = require("../models/movie")

app.get("/movies-path", (req, res)=>{
    Movie
        .find()
        .then((movieData)=>{
            res.render("movies", {movieHbs: movieData});
        })
        .catch((error)=>{
            res.send("Error:", error)
        })
})

module.exports = app;

app.get("/movies/detail/:movieId", (req, res)=>{
    Movie
        .findById(req.params.movieId)
        .then((movieData)=>{
            res.render("movie", {movieHbs: movieData});
        })
        .catch((error)=>{
            res.send("Error:", error)
        })
})