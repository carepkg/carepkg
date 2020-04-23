const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const Address = require("./address");
const OrderProduct = require("./lineItem");
const Category = require("./category");
const PricingHistory = require("./pricingHistory");
const Order = require("./order");
const ProductCategory = require("./productCategory");
const LineItem = require("./lineItem");
const CartLineItem = require("./cartLineItem");
const Package = require("./package");
const Company = require("./company");
const PackageLineItem = require("./packageLineItem");
const Upvote = require("./upvotes");

// --------- ASSOCIATIONS --------- \\

//User can have multiple addresses/shipTo locations saved
User.hasMany(Address);
User.hasMany(Review);
User.hasMany(Order);
User.hasMany(CartLineItem);
User.hasMany(Package);
User.hasMany(Upvote);

Company.hasMany(Package);

Package.hasMany(Upvote);
Package.hasMany(PackageLineItem);

Product.hasMany(PackageLineItem);
Product.hasMany(Review);
Product.hasMany(CartLineItem);
Product.hasMany(PricingHistory);
Product.hasMany(LineItem);

Order.hasMany(LineItem);

LineItem.belongsTo(Product);
LineItem.belongsTo(Order);

CartLineItem.belongsTo(User);
CartLineItem.belongsTo(Product);

PackageLineItem.belongsTo(Package);
PackageLineItem.belongsTo(Product);

Address.belongsTo(User);
Review.belongsTo(User);
Order.belongsTo(User);

Review.belongsTo(Product);
PricingHistory.belongsTo(Product);

module.exports = {
  User,
  Product,
  Review,
  Address,
  OrderProduct,
  Category,
  PricingHistory,
  Order,
  ProductCategory,
  LineItem,
  CartLineItem,
  Company,
  PackageLineItem,
  Package,
  Upvote
};
