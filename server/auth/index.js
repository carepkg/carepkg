const router = require("express").Router();
const {
  User,
  Review,
  Order,
  Product,
  LineItem,
  PurchaseProfile,
  Company,
  Package,
  PackageLineItem
} = require("../db/models");
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
              model: LineItem,
              include: [
                {
                  model: Product
                }
              ]
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
        },
        {
          model: PurchaseProfile
        },
        {
          model: Package,
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
        }
      ]
    });
    const company = await Company.findOne({
      where: { coEmail: req.body.email, coPassword: req.body.password },
      include: [
        {
          model: Package,
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
        }
      ]
    });
    if (!company && !user) {
      res.status(401).send("Wrong username and/or password");
    } else if (company) {
      req.login(company, err => (err ? next(err) : res.json(company)));
    } else if (user) {
      req.login(user, err => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});

//need to do separate company sign up
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
  req.session.destroy();
  res.redirect("/");
});

router.get("/me", (req, res) => {
  try {
    console.log(req.session);
    if (req.user) {
      res.json(req.user);
    } else {
      res.json({ id: "1" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
