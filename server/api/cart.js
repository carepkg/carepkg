const router = require("express").Router();
const Sequelize = "sequelize";
const { CartLineItem, Product } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const cart = await CartLineItem.findAll({
      where: {
        userId: req.params.userId
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
    const product = await Product.findByPk(productId);
    const cartLineItem = await CartLineItem.create({
      qty: req.body.qty,
      price: product.price * req.body.qty,
      userId: req.body.userId,
      productid: req.params.productId
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    await CartLineItem.delete({
      where: {
        productId: req.params.productId
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
