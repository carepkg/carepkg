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

module.exports = router;
