const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    discription: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    gener: {
        type: String,
        require: true
    },
    language: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        require: true
    },
    poster: {
        type: String,
        require: true
    },
});

const Movies = mongoose.model("movies", movieSchema);
module.exports = Movies;