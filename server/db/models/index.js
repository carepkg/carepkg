const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const PurchaseProfile = require("./purchaseProfile");
const OrderProduct = require("./orderProduct");
const Category = require("./category");
const PricingHistory = require("./pricingHistory");
const Order = require("./order");

// --------- ASSOCIATIONS --------- \\

User.hasMany(PurchaseProfile);
PurchaseProfile.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Review);
Review.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Order, { through: OrderProduct });
Order.belongsToMany(Product, { through: OrderProduct });

Product.belongsToMany(Category, { through: "productCategory" });
Category.belongsToMany(Product, { through: "productCategory" });

Product.hasMany(PricingHistory);
PricingHistory.belongsTo(Product);

module.exports = {
  User,
  Product,
  Review,
  PurchaseProfile,
  OrderProduct,
  Category,
  PricingHistory,
  Order
};
