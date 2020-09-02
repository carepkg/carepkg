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
const Shipping = require("./shipping");
const WishlistLineItem = require("./wishlistLineItem");

// --------- ASSOCIATIONS --------- \\

//User can have multiple addresses/shipTo locations saved
User.hasMany(Address);
User.hasMany(Review);
User.hasMany(Order);
User.hasMany(CartLineItem);
User.hasMany(WishlistLineItem);

Product.hasMany(Review);
Product.hasMany(CartLineItem);
Product.hasMany(WishlistLineItem);
Product.hasMany(PricingHistory);
Product.hasMany(LineItem);
Product.hasMany(ProductCategory);

Category.hasMany(ProductCategory);

Order.hasMany(LineItem);
Order.belongsTo(Shipping);

LineItem.belongsTo(Product);
LineItem.belongsTo(Order);

Shipping.hasMany(Order);

CartLineItem.belongsTo(User);
CartLineItem.belongsTo(Product);

WishlistLineItem.belongsTo(User);
WishlistLineItem.belongsTo(Product);

ProductCategory.belongsTo(Product);
ProductCategory.belongsTo(Category);

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
  Shipping,
  WishlistLineItem
};
