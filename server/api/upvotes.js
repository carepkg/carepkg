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
    console.log("here");
    console.log(hasBeenLiked);
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
    console.log("beg of post");
    console.log("body: ", req.body, "params: ", req.params);
    const newUpvote = await Upvote.create({
      userId: req.body.userId,
      packageId: req.params.packageId
    });
    console.log("end of post");
    res.json(newUpvote);
  } catch (err) {
    next(err);
  }
});

router.delete("/:packageId/:userId", async (req, res, next) => {
  try {
    console.log("beg of delete");
    await Upvote.destroy({
      where: {
        userId: req.params.userId,
        packageId: req.params.packageId
      }
    });
    console.log("end of delete");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
