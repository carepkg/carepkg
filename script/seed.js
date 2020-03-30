/* eslint-disable complexity */
/* eslint-disable max-statements */
"use strict";

const db = require("../server/db");
const {
  User,
  PurchaseProfile,
  Category,
  Product,
  Review,
  Order,
  PricingHistory
} = require("../server/db/models/");
const faker = require("faker");
const randomPrice = () => Math.floor(Math.random() * 100) + 0.99;
const randomNum = num => Math.floor(Math.random() * num) + 1;
const randomInd = num => Math.floor(Math.random() * num);

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
      email: "henry@carepkg.com",
      role: "Admin"
    }),
    User.create({
      firstName: "Isley",
      lastName: "Griffith",
      age: 21,
      userName: "igriffith",
      email: "isley@carepkg.com",
      role: "Admin"
    }),
    User.create({
      firstName: "Rufus",
      lastName: "Lam-Griffith",
      age: 1,
      userName: "roof",
      email: "rufus@email.com",
      role: "Customer"
    }),
    User.create({
      firstName: "Steven",
      lastName: "Bruno",
      age: 2,
      userName: "sbruno",
      email: "sbruno@carepkg.com",
      role: "Admin"
    })
  ]);

  // --------- PRODUCTS -------- \\
  const products = await Promise.all([
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tent",
      description: "Place to sleep. Easy set up",
      image: "/product-images/tent.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Swiss Army Knife",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/swiss-army-knife.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Headlamp",
      description: "A lamp but for your head",
      image: "/product-images/head-lamp.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tarp",
      description: "Put this thing under tent",
      image: "/product-images/tarp.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Claymore",
      description: "Execute your enemies",
      image: "/product-images/claymore.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fanny Pack",
      description: "Make it like, camping",
      image: "/product-images/fanny-pack.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fire Starter",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/fire-starter.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flint and Steel",
      description: "Minecraft style",
      image: "/product-images/flint-and-steel.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Cobblestone",
      description: "Unsung hero",
      image: "/product-images/cobblestone.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Compass",
      description: "Works 50% of the time",
      image: "/product-images/compass.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flashlight",
      description: "Flickers when you're scared",
      image: "/product-images/flashlight.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Bear Safe",
      description: "Does not work against polar bears",
      image: "/product-images/bear-safe.jpg"
    }).then(async prod => {
      prod.addPricingHistory(
        await PricingHistory.create({ price: prod.price })
      );
    })
  ]);

  // --------- CATEGORIES -------- \\
  const categories = await Promise.all([
    Category.create({ name: "Camp Furniture" }),
    Category.create({ name: "Clothing" }),
    Category.create({ name: "Gadgets" }),
    Category.create({ name: "Hiking" }),
    Category.create({ name: "Kitchenware" }),
    Category.create({ name: "Nutrition" }),
    Category.create({ name: "Sleeping" }),
    Category.create({ name: "Tents" }),
    Category.create({ name: "Tools" })
  ]);

  const getCategory = name => {
    categories.find(cat => (cat.name = name));
  };

  // --------- REVIEWS -------- \\
  const reviews = [];
  for (let i = 0; i < 30; i++) {
    reviews.push(
      await Review.create({
        productId: randomNum(products.length),
        rating: randomNum(5),
        text: faker.lorem.sentence(randomNum(100))
      }).then(rev => {
        rev.setUser(users[randomInd(users.length)]);
      })
    );
  }

  // --------- Orders -------- \\
  const orders = [];
  for (let i = 0; i < 4; i++) {
    orders.push(
      await Order.create({}).then(ord => {
        ord.setUser(users[i]);
      })
    );
  }

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
