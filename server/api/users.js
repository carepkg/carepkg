const router = require("express").Router();
const Sequelize = require("sequelize");
const { User, Product, Order } = require("../db/models");

const isAdmin = (req, res, next) => {
  try {
    if (req.user && req.user.role === "Admin") {
      next();
    } else {
      const err = new Error("You are not an admin");
      throw err;
    }
  } catch (err) {
    next(err);
  }
};

//only admins should be able to grab all users info
router.get("/", isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll();
    req.json(users);
  } catch (err) {
    next(err);
  }
});

router.put("/update/email", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({
      where: {
        email: req.body.originalEmail
      }
    });
    await user.update({
      email: req.body.newEmail
    });
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
