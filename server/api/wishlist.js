const router = require("express").Router();
const Sequelize = require("sequelize");
const { WishlistLineItem, Product } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const items = await WishlistLineItem.findAll({
      where: {
        userId: req.user.id
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
router.post("/:productId", async (req, res, next) => {
  try {
    const item = await WishlistLineItem.create({
      userId: req.user.id,
      productId: req.params.productId
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});
router.delete("/:productId", async (req, res, next) => {
  try {
    await WishlistLineItem.destroy({
      where: {
        userId: req.user.id,
        productId: req.params.productId
      }
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
