const router = require("express").Router();
const Sequelize = "sequelize";
const { CartLineItem, Product } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const cart = await CartLineItem.findAll({
      where: {
        userId: req.user.id
      },
      include: [{ model: Product }]
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/:productId", async (req, res, next) => {
  try {
    const { qty } = req.body;
    const cartLineItem = await CartLineItem.create({
      qty: qty,
      totalPriceAtPurchase: product.price * qty,
      userId: req.user.id,
      productId: req.params.productId
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    await CartLineItem.destroy({
      where: {
        userId: req.user.id,
        productId: req.params.productId
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
