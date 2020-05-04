const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart"));
router.use("/packages", require("./packages"));
router.use("/upvotes", require("./upvotes"));
router.use("/categories", require("./categories"));
router.use("/addresses", require("./addresses"));
router.use("/reviews", require("./reviews"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
module.exports = router;
