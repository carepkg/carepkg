const router = require("express").Router();
const Sequelize = "sequelize";
const { Address } = require("../db/models");

router.get("/:userId", async (req, res, next) => {
  try {
    const addresses = await Address.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.json(addresses);
  } catch (err) {
    next(err);
  }
});

router.delete("/:addressId", async (req, res, next) => {
  try {
    await Address.destroy({
      where: {
        id: req.params.addressId
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
