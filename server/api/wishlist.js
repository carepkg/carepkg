const router = require("express").Router();
const Sequelize = require("sequelize");
const { WishlistLineItem, Product } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const items = await WishlistLineItem.findAll({
      where: {
        userId: req.params.userId
      },
      include: [
        {
          model: Product
        }
      ]
    });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
