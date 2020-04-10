const router = require("express").Router();
const Sequelize = require("sequelize");
const { Upvote } = require("../db/models");

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
    }
  } catch (err) {
    next(err);
  }
});
router.post("/:packageId", async (req, res, next) => {
  try {
    const newUpvote = await Upvote.create({
      userId: req.body.userId,
      packageId: req.params.packageId
    });
    res.json(newUpvote);
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
  } catch (err) {
    next(err);
  }
});
