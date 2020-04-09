const router = require("express").Router();
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
// router.get("/user", async (req, res, next) => {
//   try {
//     //currently grabbing Henry Griffith's cart for testing purposes
//     const user = await User.findByPk(1, {
//       include: [
//         {
//           model: Order,
//           where: {
//             userId: 1
//           },
//           include: [{ model: Product }]
//         }
//       ]
//     });
//     if (user) res.json(user);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
