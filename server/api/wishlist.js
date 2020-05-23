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
router.post("/lineItem", async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    await WishlistLineItem.create({
      userId,
      productId
    });
  } catch (err) {
    next(err);
  }
});
router.delete("/lineItem", async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    await WishlistLineItem.destroy({
      where: {
        userId,
        productId
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
