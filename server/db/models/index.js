const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const PurchaseProfile = require("./purchaseProfile");
const OrderProduct = require("./orderProduct");
const Category = require("./category");
const PricingHistory = require("./pricingHistory");
const Order = require("./order");
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

Product.belongsToMany(Category);
Category.belongsToMany(Product);

module.exports = {
  User,
  Product,
  Review,
  PurchaseProfile
};
