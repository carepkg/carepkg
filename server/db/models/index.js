const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const PurchaseProfile = require("./purchaseProfile");
const OrderProduct = require("./lineItem");
const Category = require("./category");
const PricingHistory = require("./pricingHistory");
const Order = require("./order");
const ProductCategory = require("./productCategory");
const LineItem = require("./lineItem");
const CartLineItem = require("./cartLineItem");

// --------- ASSOCIATIONS --------- \\

//User can have multiple addresses/shipTo locations saved
User.hasMany(PurchaseProfile);
User.hasMany(Review);
User.hasMany(Order);
User.hasMany(CartLineItem);

Product.hasMany(Review);
Product.hasMany(LineItem);
Product.hasMany(CartLineItem);
Product.hasMany(PricingHistory);

Order.hasMany(LineItem);

LineItem.belongsTo(Product);
LineItem.belongsTo(Order);

CartLineItem.belongsTo(User);
CartLineItem.belongsTo(Product);

PurchaseProfile.belongsTo(User);
Review.belongsTo(User);
Order.belongsTo(User);

Review.belongsTo(Product);
PricingHistory.belongsTo(Product);

module.exports = {
  User,
  Product,
  Review,
  PurchaseProfile,
  OrderProduct,
  Category,
  PricingHistory,
  Order,
  ProductCategory,
  LineItem,
  CartLineItem
};
