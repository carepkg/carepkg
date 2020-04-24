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
router.put("/removeDefault", async (req, res, next) => {
  try {
    const address = await Address.findOne({
      where: {
        default: true
      }
    });
    await address.update({
      default: false
    });
    res.json(address);
  } catch (err) {
    next(err);
  }
});
router.put("/set/:addressId", async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    await address.update({
      default: true
    });
    res.json(address);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
