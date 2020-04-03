const router = require("express").Router();
const { User, Review, Order, Product, LineItem } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const session = require("express-session");

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email, password: req.body.password },
      include: [
        {
          model: Order,
          include: [
            {
              model: Product
              // through: {
              //   attributes: [qty, orderId, productId]
              // }
            }
          ]
        },
        {
          model: Review,
          include: [
            {
              model: Product
            }
          ]
        }
      ]
    });
    console.log(user);
    if (!user) {
      res.status(401).send("Wrong username and/or password");
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.login(user, err => (err ? next(err) : res.json(user)));
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/logout", (req, res, next) => {
  req.logout();
  // req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

module.exports = router;
