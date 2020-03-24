/* eslint-disable complexity */
/* eslint-disable max-statements */
"use strict";

const db = require("../server/db");
const {
  User,
  PurchaseProfile,
  Category,
  Product,
  Review
} = require("../server/db/models/");
const faker = require("faker");
const randomNum = () => Math.floor(Math.random() * 100) - 0.01;
class Price {
  constructor() {
    this.price = randomNum();
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
      lastName: "Griffith",
      age: 1,
      userName: "roof",
      email: "rufus@email.com",
      role: "Customer"
    })
  ]);

  // --------- Products -------- \\
  const products = await Promise.all([
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tent",
      description: "Place to sleep. Easy set up"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Swiss Army Knife",
      description: "A jack of all trades inside your pocket"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Headlamp",
      description: "A lamp but for your head"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Tarp",
      description: "Put this thing under tent"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Claymore",
      description: "Execute your enemies"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fanny Pack",
      description: "Make it like, camping"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Fire Starter",
      description: "Great fire starter that never doesn't ignite"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flint and Steel",
      description: "Minecraft style"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Cobblestone Block",
      description: "Unsung hero"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Compass",
      description: "Works 50% of the time"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Flashlight",
      description: "Flickers when you're scared"
    }),
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Bear Safe",
      description: "Does not work against polar bears"
    }),

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
