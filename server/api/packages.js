const router = require("express").Router();
const Sequelize = require("sequelize");
const { Package } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const packages = await Package.findAll({
      order: [["upvotes", "DESC"]],
      limit: 6
    });
    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
