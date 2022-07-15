const { Movie } = require("../models/movie");

exports.addMovie = async (req, res) => {
  try {
    const { releseDate, ...rest } = req.body;

    await new Movie({ ...rest, releseDate: new Date(releseDate) }).save();
    res.send("successfully added");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const { id, ...rest } = req.body;

    await Movie.findByIdAndUpdate(id, { ...rest });
    res.send("successfully updated");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.body;

    await Movie.findByIdAndDelete(id);
    res.send("successfully deleted");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
