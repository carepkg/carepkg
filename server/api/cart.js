const router = require("express").Router();
const Sequelize = "sequelize";
const { CartLineItem, Product } = require("../db/models");

router.get("/:id", async (req, res, next) => {
  try {
    let cart;
    if (req.user) {
      console.log("req.user exists");
      cart = await CartLineItem.findAll({
        where: {
          userId: req.user.id
        },
        include: [{ model: Product }]
      });
    } else {
      cart = await CartLineItem.findAll({
        where: {
          userId: req.params.id
        },
        include: [{ model: Product }]
      });
    }
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/:userId/:productId", async (req, res, next) => {
  try {
    const { qty } = req.body;
    const product = await Product.findByPk(req.params.productId);
    const cartLineItem = await CartLineItem.create({
      qty: qty,
      totalPriceAtPurchase: product.price * qty,
      userId: req.user ? req.user.id : req.params.userId,
      productId: req.params.productId
    });
    res.json(cartLineItem);
  } catch (err) {
    next(err);
  }
});

router.delete("/:userId/:productId", async (req, res, next) => {
  try {
    await CartLineItem.destroy({
      where: {
        userId: req.params.userId,
        productId: req.params.productId
      }
    });
    res.end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
