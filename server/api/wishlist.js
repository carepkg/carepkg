const router = require("express").Router();
const Sequelize = require("sequelize");
const { WishlistLineItem } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const items = await WishlistLineItem.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
