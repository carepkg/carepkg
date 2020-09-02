const router = require("express").Router();
const {
  User,
  Review,
  Order,
  Product,
  LineItem,
  Address
} = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
          model: Address
        }
      ]
    });
    if (!user) {
      res.status(401).send("Wrong username and/or password");
    } else {
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

router.get("/me", async (req, res) => {
  const defaultUser = await User.findOne({
    where: {
      firstName: "Isley",
      lastName: "Griffith"
    },
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
        model: Address
      }
    ]
  });
  console.log(defaultUser);
  try {
    if (req.user) {
      res.json(req.user);
    } else {
      console.log("yo");
      res.json(defaultUser);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
