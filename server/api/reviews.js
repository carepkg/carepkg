const router = require("express").Router();
const Sequelize = require("sequelize");
const { Review } = require("../db/models");

router.post("/add", async (req, res, next) => {
  try {
    const { star, familiarity, title, text } = req.body;
    const review = await Review.create({
      rating: star,
      familiarity: familiarity,
      title: title,
      text: text
    });
    res.json(review);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
