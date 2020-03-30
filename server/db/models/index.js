const User = require("./user");
const Product = require("./product");
const Review = require("./review");
const PurchaseProfile = require("./purchaseProfile");
const OrderProduct = require("./orderProduct");
const Category = require("./category");
const PricingHistory = require("./pricingHistory");
const Order = require("./order");
const ProductCategory = require("./ProductCategory");

// --------- ASSOCIATIONS --------- \\

//User can have multiple addresses/shipTo locations saved
User.hasMany(PurchaseProfile);
PurchaseProfile.belongsTo(User, { foreignKey: "userId" });

//User can have multiple reviews
User.hasMany(Review);
Review.belongsTo(User);

//User can have one cart, but many previous orders
User.hasMany(Order);
Order.belongsTo(User);

//Products can have multiple written reviews
Product.hasMany(Review);
Review.belongsTo(Product);

//The same product can be in numerous orders, an order can have multiple products.
//commented out because will create manually similar to ProductCategory

// Product.belongsToMany(Order, { through: OrderProduct });
// Order.belongsToMany(Product, { through: OrderProduct });

//Product can have many categories it belongs to, categories hold many products
//Deleted association due to Sequelize Unique Constraint Validation on IDs. Annoying.
//Instead created ProductCategory table for manual entries

//A product's price changes all the time. PricingHistory is a span of time w/ an associated price
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
  Order,
  ProductCategory
};
