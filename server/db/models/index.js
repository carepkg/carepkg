const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const PurchaseProfile = require("./purchaseProfile");
const OrderProduct = require("./orderProduct");

// --------- ASSOCIATIONS --------- \\

User.hasMany(PurchaseProfile);
PurchaseProfile.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product);

module.exports = {
  User,
  Product,
  Review,
  PurchaseProfile
};
