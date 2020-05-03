const router = require("express").Router();
const Sequelize = require("sequelize");
const { Review, User } = require("../db/models");

router.get("/:productId", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: Number(req.params.productId)
      },
      include: [
        {
          model: User
        }
      ]
    });
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});
router.get("/author/:userId", async (req, res, next) => {
  try {
    const author = await User.findByPk(Number(req.params.userId));
    res.json(author);
  } catch (err) {
    next(err);
  }
});
router.post("/add", async (req, res, next) => {
  try {
    const {
      star,
      familiarity,
      title,
      text,
      author,
      userId,
      productId
    } = req.body;
    const user = await User.findByPk(Number(userId));
    const review = await Review.create({
      productId: productId,
      rating: star,
      familiarity: familiarity,
      title: title,
      text: text
    }).then(rev => rev.setUser(user));
    const updatedReview = await Review.findOne({
      where: {
        userId: userId,
        productId: productId,
        title: title,
        text: text
      },
      include: [
        {
          model: User
        }
      ]
    });
    console.log("here", review);

    res.json(updatedReview);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
