const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  name: String,
  video: String,
  description: String
});

const ExercisesByMuslceSchema = mongoose.Schema({
  muscle: {
    type: String,
    required: true
  },
  exercises: [exerciseSchema]
});

module.exports = mongoose.model("exercises", ExercisesByMuslceSchema);
