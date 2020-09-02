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
  Shipping,
  WishlistLineItem
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
  categories.forEach(cat => console.log(cat.id));

  const findCategoryByName = name => {
    const category = categories.find(cat => cat.name === name);
    return category.id;
  };
  function getCategoryIdsFrom() {
    const found = [];
    for (let i = 0; i < arguments.length; i++) {
      const id = findCategoryByName(arguments[i]);
      found.push(id);
    }
    return found;
  }

  // --------- PRODUCTS -------- \\

  //added 6/14/20
  const products = await Promise.all([
    Product.create({
      price: new Price().price,
      qty: qty,
      name: "Waterproof Tent",
      description: "1",
      image: "/product-images/WaterproofTent.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Elastic Lounge Chair",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/ElasticLoungeChair.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Furniture").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Black Camping Chair",
      description: "A lamp but for your head",
      image: "/product-images/BlackCampingChair.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Furniture").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Foldable Camp Chair",
      description: "Put this thing under tent",
      image: "/product-images/FoldingCampChair.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Furniture").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Collapsible Lounge Chair",
      description: "Execute your enemies",
      image: "/product-images/CollapsableLoungeChair.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Furniture").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Maximum Comfort Camp Chair",
      description: "Make it like, camping",
      image: "/product-images/MaximumComfortCampChair.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Furniture").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Popup Cabin Tent",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/PopupCabinTent.png"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Coleman Octagon Tent",
      description: "Minecraft style",
      image: "/product-images/ColemanOctagonTent.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Ultralight Dome Tent",
      description: "Unsung hero",
      image: "/product-images/UltralightDomeTent.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Kid's Nursery Tent",
      description: "Works 50% of the time",
      image: "/product-images/KidsNurseryTent.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Cubic Work Tent",
      description: "Flickers when you're scared",
      image: "/product-images/CubicWorkTent.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping", "Tents").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Men's Pro Safari Shorts",
      description: "Does not work against polar bears",
      image: "/product-images/MensProSafariShorts.png"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Clothing").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "BTL Men's Cargo Shorts",
      description: "Place to sleep. Easy set up",
      image: "/product-images/BTLMensCargoShorts.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Clothing").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Standard Olive Cargo Shorts",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/StandardOliveCargo.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Clothing").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Ultralight Titanium Cookware",
      description: "A lamp but for your head",
      image: "/product-images/UltralightTitaniumCookware.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Metric Steamer Pot",
      description: "Put this thing under tent",
      image: "/product-images/MetricSteamerPot.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Butane 1-Burner Stove",
      description: "Execute your enemies",
      image: "/product-images/ButaneOneBurnerStove.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Blue Tabletop Stove",
      description: "Make it like, camping",
      image: "/product-images/TabletopStoveBlue.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Double Burner Stove",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/DoubleBurnerStove.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Sportsman Single Burner",
      description: "Minecraft style",
      image: "/product-images/SportsmanSingleBurner.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "FlameKing Portable Stove",
      description: "Unsung hero",
      image: "/product-images/FlameKingPortableStove.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Propane Cylinder",
      description: "Works 50% of the time",
      image: "/product-images/PropaneCylinder.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Lindal Valve Converter",
      description: "Flickers when you're scared",
      image: "/product-images/LindalValveConverter.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Gadgets", "Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Single Propane Grill",
      description: "Does not work against polar bears",
      image: "/product-images/SinglePropaneGrill.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Isobutane Adapter Hose",
      description: "Place to sleep. Easy set up",
      image: "/product-images/IsobutaneAdapterHose.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware", "Gadgets").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Refillable Steel Cylinder",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/RefillableSteelCylinder.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Lightweight Propane Grill",
      description: "A lamp but for your head",
      image: "/product-images/LightweightPropaneGrill.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Keith Titanium Set",
      description: "Put this thing under tent",
      image: "/product-images/KeithTitaniumSet.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Widesea Tourist Cooker",
      description: "Execute your enemies",
      image: "/product-images/WideseaTouristCooker.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Collapsible Electric Kettle",
      description: "Make it like, camping",
      image: "/product-images/CollapsibleElectricKettle.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware", "Gadgets").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Titanium Pot",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/TitaniumPot.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Stainless Steel Campfire Pot",
      description: "Minecraft style",
      image: "/product-images/StainlessSteelCampfirePot.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Navaris 3-in-1 Silverware Set",
      description: "Unsung hero",
      image: "/product-images/Navaris3in1Silverware.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Tools", "Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Utility Plastic Utensils",
      description: "Works 50% of the time",
      image: "/product-images/UtilityPlasticware.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware", "Tools").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Titanium Folding Cutlery",
      description: "Flickers when you're scared",
      image: "/product-images/TitaniumFoldingCutlery.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Cookinware Keyset",
      description: "Does not work against polar bears",
      image: "/product-images/CookingwareKeyset.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Kitchenware").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Outdoor Accessory Bag",
      description: "Place to sleep. Easy set up",
      image: "/product-images/OutdoorAcessoryBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Storage").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Noches Sleeping Bag",
      description: "A jack of all trades inside your pocket",
      image: "/product-images/NochesSleepingBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Coleman Standard Sleeping Bag",
      description: "A lamp but for your head",
      image: "/product-images/ColemanStandard.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "FF 0 Degree Sleeping Bag",
      description: "Put this thing under tent",
      image: "/product-images/FashionFirst0DegreeBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Fahrenheit Regular Sleeping Bag",
      description: "Execute your enemies",
      image: "/product-images/FahrenheitRegularSleepingBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Kid's Sleeping Bag",
      description: "Make it like, camping",
      image: "/product-images/KidsSleepingBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Eureka Minnow Sleeping Bag",
      description: "Great fire starter that never doesn't ignite",
      image: "/product-images/EurekaMinnowSleepingBag.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Camping Pillow",
      description: "Minecraft style",
      image: "/product-images/CampingPillow.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Klymit Rollup Pillow",
      description: "Unsung hero",
      image: "/product-images/KlymitRollupPillow.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "NEMO Striped Pillow",
      description: "Works 50% of the time",
      image: "/product-images/NEMOStripedPillow.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Windproof Leisure Blanket",
      description: "Flickers when you're scared",
      image: "/product-images/WindproofLeisureBlanket.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "GEAR AID Repair Kit",
      description: "Does not work against polar bears",
      image: "/product-images/GEARAIDRepairKit.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Tools").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Down Camping Blanket",
      description: "Does not work against polar bears",
      image: "/product-images/DownCampingBlanket.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Zefabak Down Blanket",
      description: "Does not work against polar bears",
      image: "/product-images/ZefabakDownBlanket.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Sleeping").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Blaze Hand Warmer",
      description: "Does not work against polar bears",
      image: "/product-images/BlazeHandWarmer.png"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Tools").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
      name: "Steel Pocket Warmer",
      description: "Does not work against polar bears",
      image: "/product-images/SteelPocketWarmer.jpg"
    })
      .then(async prod => {
        try {
          getCategoryIdsFrom("Tools").forEach(async id => {
            await ProductCategory.create({
              productId: prod.id,
              categoryId: id
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
  const wishlistLineItems = await Promise.all([
    WishlistLineItem.create({
      userId: 2,
      productId: 4
    }),
    WishlistLineItem.create({
      userId: 2,
      productId: 10
    }),
    WishlistLineItem.create({
      userId: 1,
      productId: 2
    }),
    WishlistLineItem.create({
      userId: 1,
      productId: 1
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
