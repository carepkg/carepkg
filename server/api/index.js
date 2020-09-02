const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/products", require("./products"));
router.use("/cart", require("./cart"));
router.use("/categories", require("./categories"));
router.use("/addresses", require("./addresses"));
router.use("/reviews", require("./reviews"));
router.use("/shippings", require("./shippings"));
router.use("/wishlist", require("./wishlist"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
module.exports = router;
