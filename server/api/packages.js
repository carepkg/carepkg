const router = require("express").Router();
const Sequelize = require("sequelize");
const { Package, PackageLineItem, Product, Upvote } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const packages = await Package.findAll({
      order: [["numUpvotes", "DESC"]],
      limit: 6,
      include: [
        {
          model: PackageLineItem,
          include: [
            {
              model: Product
            }
          ]
        },
        {
          model: Upvote
        }
      ]
    });
    res.json(packages);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    console.log(req.params.productId);
    const packageLineItems = await PackageLineItem.findAll({
      where: {
        productId: req.params.productId
      },
      limit: 5,
      include: [
        {
          model: Package
        }
      ]
    });
    console.log(packageLineItems);
    res.json(packageLineItems);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
