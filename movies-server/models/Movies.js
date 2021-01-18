const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  name: { type: String, required: true},
  duration: { type: Number, required: true },
  schedule: { type: String, required: true },
  rating: { type: Number, required: true },
  poster: { type: String, required: true },
  language: { type: String, required: true },
  postedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Movies", MovieSchema);
