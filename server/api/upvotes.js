const router = require("express").Router();
const Sequelize = require("sequelize");
const { Upvote, Package } = require("../db/models");

router.get("/:packageId/:userId", async (req, res, next) => {
  try {
    const hasBeenLiked = await Upvote.findOne({
      where: {
        userId: req.params.userId,
        packageId: req.params.packageId
      }
    });
    if (hasBeenLiked) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (err) {
    next(err);
  }
});
router.post("/:packageId", async (req, res, next) => {
  try {
    await Upvote.create({
      userId: req.body.userId,
      packageId: req.params.packageId
    });
    const package = await Package.findByPk(req.params.userId, {
      include: [
        {
          model: Upvote
        }
      ]
    });
    res.json(package);
  } catch (err) {
    next(err);
  }
});

router.delete("/:packageId/:userId", async (req, res, next) => {
  try {
    await Upvote.destroy({
      where: {
        userId: req.params.userId,
        packageId: req.params.packageId
      }
    });
    const package = await Package.findByPk(req.params.packageId, {
      include: [
        {
          model: Upvote
        }
      ]
    });
    res.json(package);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
