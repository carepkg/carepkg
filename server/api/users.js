const router = require("express").Router();
const { User } = require("../db/models");

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

router.get("/", isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll();
    req.json(users);
  } catch (err) {
    next(err);
  }
});
