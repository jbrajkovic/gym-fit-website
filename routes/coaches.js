const express = require("express");
const router = express.Router();
const Coach = require("../models/Coach");

router.get("/", async (req, res) => {
  try {
    const cocahes = await Coach.find();
    res.json(cocahes);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const coach = new Coach({
    name: req.body.name,
    imgUrl: req.body.imgUrl,
    description: req.body.description,
    facebook: req.body.facebook,
    instagram: req.body.instagram
  });

  try {
    const savedCoach = await coach.save();
    res.json(savedCoach);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const coach = await Coach.findById(req.params.id);
    res.json(coach);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const removed = await Coach.remove({ _id: req.params.id });
    res.json(removed);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updated = await Coach.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          imgUrl: req.body.imgUrl,
          description: req.body.description,
          facebook: req.body.facebook,
          instagram: req.body.instagram
        }
      }
    );
    res.json(updated);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
