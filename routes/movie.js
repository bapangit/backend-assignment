const express = require("express");
const router = express.Router();

const { addMovie, updateMovie, deleteMovie } = require("../controllers/movie");
router.post("/addmovie", addMovie);
router.put("/update-movie", updateMovie);
router.delete("/delete-movie", deleteMovie);

module.exports = router;
