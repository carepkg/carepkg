const router = require("express").Router();
const Sequelize = require("sequelize");
const { Review } = require("../db/models");

router.post("/add", async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
