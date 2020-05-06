/* eslint-disable complexity */
/* eslint-disable max-statements */
"use strict";

const db = require("../server/db");
const {
  User,
  Address,
  Category,
  Product,
  Review,
  Order,
  PricingHistory,
  ProductCategory,
  LineItem,
  CartLineItem,
  Company,
  Package,
  PackageLineItem,
  Upvote,
  Shipping
} = require("../server/db/models/");
const faker = require("faker");
const familiarities = [
  "Never used it",
  "I've used it once or twice",
  "I use it fairly often",
  "I use it all the time"
];
const reviewTitles = [
  "Cozy, Perfect",
  "Quality Beginner Setup",
  "Unmatched Product",
  "It's Okay...",
  "100% Would Buy Again",
  "Pretty Standard, Not The Best",
  "Trying To Be Something It's Not",
  "Such A Blessing",
  "I Love This Thing",
  "I Do Not Recommend",
  "The Material Is Wonderful",
  "This Was Made For A Camper",
  "Beautiful",
  "Terrible"
];
const randomPrice = () => Math.floor(Math.random() * 100) + 0.99;
const randomNum = num => Math.floor(Math.random() * num) + 1;
const randomInd = num => Math.floor(Math.random() * num);
const randomFamiliarity = (num = randomInd(familiarities.length)) =>
  familiarities[num];
const randomTitle = (num = randomInd(reviewTitles.length)) => reviewTitles[num];
class Price {
  constructor() {
    this.price = randomPrice();
  }
}

const qty = 1000;

async function seed() {
  await db.sync({ force: true });
  console.log("db has been synced!");

  // ---------- USERS ---------- \\
  const users = await Promise.all([
    User.create({
      firstName: "Henry",
      lastName: "Griffith",
      age: 23,
      userName: "hgriffith",
      email: "h",
      password: "h",
      role: "Admin"
    }),
    User.create({
      firstName: "Isley",
      lastName: "Griffith",
      age: 21,
      userName: "igriffith",
      email: "isley@carepkg.com",
      password: "ig",
      role: "Admin"
    }),
    User.create({
      firstName: "Rufus",
      lastName: "Lam-Griffith",
      age: 1,
      userName: "roof",
      email: "rufus@email.com",
      password: "rlg",
      role: "Customer"
    }),
    User.create({
      firstName: "Steven",
      lastName: "Bruno",
      age: 2,
      userName: "sbruno",
      email: "sbruno@carepkg.com",
      password: "sb",
      role: "Admin"
    })
  ]);

  const companies = await Promise.all([
    Company.create({
      name: "Tentacity",
      membership: "Basic",
      coEmail: "tents@tentacity.com",
      coPassword: "tentacity"
    }),
    Company.create({
      name: "Climber's Haven",
      membership: "Premium",
      coEmail: "weclimb@climbershaven.com",
      coPassword: "climbershaven"
    })
  ]);

  // ----- PACKAGES ----- \\

  const packages = await Promise.all([
    Package.create({
      name: "Beginner Climbing Gear",
      numPurchases: 13,
      numUpvotes: 10,
      companyId: 1
    }),
    Package.create({
      name: "Shelter Starter Kit",
      numPurchases: 24,
      numUpvotes: 75,
      companyId: 2
    }),
    Package.create({
      name: "My Favorites",
      numPurchases: 2,
      numUpvotes: 2,
      userId: 2
    }),
    Package.create({
      name: "Chef's Picks",
      numPurchases: 22,
      numUpvotes: 18,
      userId: 1
    }),
    Package.create({
      name: "Birthday Treat",
      numPurchases: 100,
      numUpvotes: 156,
      companyId: 2
    })
  ]);

  for (let i = 0; i < 4; i++) {
    await Upvote.create({
      packageId: 1,
      userId: i + 1
    });
    await Upvote.create({
      packageId: 2,
      userId: i + 1
    }),
      await Upvote.create({
        packageId: 3,
        userId: i + 1
      }),
      await Upvote.create({
        packageId: 4,
        userId: i + 1
      }),
      await Upvote.create({
        packageId: 5,
        userId: i + 1
      });
  }

  // --------- CATEGORIES -------- \\
  const categories = await Promise.all([
    Category.create({ name: "Furniture" }),
    Category.create({ name: "Clothing" }),
    Category.create({ name: "Gadgets" }),
    Category.create({ name: "Hiking" }),
    Category.create({ name: "Kitchenware" }),
    Category.create({ name: "Nutrition" }),
    Category.create({ name: "Sleeping" }),
    Category.create({ name: "Tents" }),
    Category.create({ name: "Tools" }),
    Category.create({ name: "Storage" })
  ]);

  const fetchCategory = name => {
    return categories.find(cat => (cat.name = name));
  };
  function fetchCategories() {
    const found = [];
    [...arguments].forEach(arg => {
      found.push(fetchCategory(arg));
    });
    return found;
  }
  // console.log(getCategories("Sleeping", "Tents"));

  // --------- PRODUCTS -------- \\
  const products = await Promise.all([
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tent",
      description: "Place to sleep. Easy set up",
      image: "/product-images/tent.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Sleeping", "Tents").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Swiss Army Knife",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/swiss-army-knife.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Headlamp",
      description: "A lamp but for your head",
      image: "/product-images/head-lamp.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Gadgets").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tarp",
      description: "Put this thing under tent",
      image: "/product-images/tarp.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Sleeping").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Claymore",
      description: "Execute your enemies",
      image: "/product-images/claymore.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Gadgets").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fanny Pack",
      description: "Make it like, camping",
      image: "/product-images/fanny-pack.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Clothing").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fire Starter",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/fire-starter.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flint and Steel",
      description: "Minecraft style",
      image: "/product-images/flint-and-steel.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Cobblestone",
      description: "Unsung hero",
      image: "/product-images/cobblestone.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Compass",
      description: "Works 50% of the time",
      image: "/product-images/compass.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Gadgets", "Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flashlight",
      description: "Flickers when you're scared",
      image: "/product-images/flashlight.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Gadgets", "Tools").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error)),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Bear Safe",
      description: "Does not work against polar bears",
      image: "/product-images/bear-safe.jpg"
    })
      .then(async prod => {
        try {
          fetchCategories("Storage").forEach(async cat => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: cat.id
            });
          });

          prod.addPricingHistory(
            await PricingHistory.create({ price: prod.price })
          );
        } catch (err) {
          console.log(err);
        }
      })
      .catch(error => console.error(error))
  ]);

  // --------- REVIEWS -------- \\
  const reviews = [];
  for (let i = 0; i < 50; i++) {
    reviews.push(
      await Review.create({
        title: randomTitle(),
        familiarity: randomFamiliarity(),
        productId: randomNum(products.length),
        rating: randomNum(5),
        text: faker.lorem.sentence(randomNum(150))
      }).then(rev => {
        rev.setUser(users[randomInd(users.length)]);
      })
    );
  }
  const shippingOptions = await Promise.all([
    Shipping.create({
      name: "Standard (5-10 Business Days)",
      cost: 0
    }),
    Shipping.create({
      name: "Two Business Days",
      cost: 12.99
    }),
    Shipping.create({
      name: "One Business Day",
      cost: 19.99
    })
  ]);
  // --------- Orders -------- \\
  const orders = [];
  for (let i = 0; i < 12; i++) {
    orders.push(
      await Order.create({
        status: "completed"
      }).then(order => {
        order.setUser(users[i % users.length]);
        order.setShipping(shippingOptions[randomInd(shippingOptions.length)]);
      })
    );
  }
  // ----- LINE ITEMS ----- \\

  const lineItems = await Promise.all([
    LineItem.create({
      qty: 1,
      orderId: 2,
      productId: 1
    }),
    LineItem.create({
      qty: 1,
      orderId: 2,
      productId: 2
    }),
    LineItem.create({
      qty: 1,
      orderId: 2,
      productId: 4
    })
  ]);

  // ----- CART ---- \\

  const cartLineItems = await Promise.all([
    CartLineItem.create({
      qty: 1,
      userId: 2,
      productId: 8
    }),
    CartLineItem.create({
      qty: 2,
      userId: 2,
      productId: 9
    }),
    CartLineItem.create({
      qty: 3,
      userId: 2,
      productId: 10
    })
  ]);

  // ---- PACKAGE LINE ITEM ---- \\
  //for companies and user Isley
  const packageLineItems = await Promise.all([
    PackageLineItem.create({
      qty: 1,
      packageId: 1,
      productId: 5
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 1,
      productId: 7
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 1,
      productId: 10
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 2,
      productId: 11
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 2,
      productId: 8
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 2,
      productId: 9
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 3,
      productId: 4
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 3,
      productId: 1
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 4,
      productId: 3
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 4,
      productId: 7
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 4,
      productId: 3
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 5,
      productId: 2
    }),
    PackageLineItem.create({
      qty: 1,
      packageId: 5,
      productId: 9
    })
  ]);

  // ----- ADDRESS ----- \\

  const addresses = await Promise.all([
    Address.create({
      userId: 2,
      name: "Home",
      email: "isley@carepkg.com",
      address1: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      country: "United States",
      postalCode: faker.address.zipCode(),
      phone: "(123)-456-7890",
      default: true
    }),
    Address.create({
      userId: 2,
      name: "Colorado Springs Apt.",
      email: "isley@carepkg.com",
      address1: faker.address.streetAddress(),
      city: "Colorado Springs",
      state: "CO",
      country: "United States",
      postalCode: faker.address.zipCode(),
      phone: "(123)-456-7890",
      default: false
    }),
    Address.create({
      userId: 2,
      name: "Malibu Beach House",
      email: "isley@carepkg.com",
      address1: faker.address.streetAddress(),
      city: "Malibu",
      state: "CA",
      country: "United States",
      postalCode: faker.address.zipCode(),
      phone: "(123)-456-7890",
      default: false
    }),
    Address.create({
      userId: 2,
      name: "Mom's",
      email: "isley@carepkg.com",
      address1: faker.address.streetAddress(),
      city: "Los Angeles",
      state: "CA",
      country: "United States",
      postalCode: faker.address.zipCode(),
      phone: "(123)-456-7890",
      default: false
    })
  ]);

  console.log("seeded successfully");
}
// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
