const router = require("express").Router();
const Sequelize = require("sequelize");
const { Shipping } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const shippings = await Shipping.findAll();
    res.json(shippings);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
