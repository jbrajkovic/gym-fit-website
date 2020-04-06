const express = require("express");
const router = express.Router();
const Exercise = require("../models/MuslceExercises");

router.get("/", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const exercise = new Exercise({
    muscle: req.body.muscle,
    exercises: req.body.exercises
  });

  try {
    const saved = await exercise.save();
    res.json(saved);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Exercise.remove({ _id: req.params.id });
    res.json(removed);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await Exercise.updateOne(
      { _id: req.params.id },
      {
        $set: {
          muscle: req.body.muscle,
          exercises: req.body.exercises
        }
      }
    );
    res.json(updated);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
