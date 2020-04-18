const router = require("express").Router();
const Sequelize = require("sequelize");
const { Category } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({});
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
