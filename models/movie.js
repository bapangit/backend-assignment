const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  rating: Number,
  cast: [String],
  genre: String,
  releseDate: Date,
});

const Movie = mongoose.model("movie", movieSchema);
module.exports = { Movie };
