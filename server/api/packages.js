const router = require("express").Router();
const Sequelize = require("sequelize");
const { Package, PackageLineItem, Product } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const packages = await Package.findAll({
      order: [["upvotes", "DESC"]],
      limit: 6,
      include: [
        {
          model: PackageLineItem,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    });
    res.json(packages);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
