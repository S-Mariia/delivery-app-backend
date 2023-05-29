const mongoose = require("mongoose");

const app = require("./app");

const PORT = 3003;

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// const { Product } = require("./models/product");
// Product.create({
//   name: "Nuts",
//   price: 35,
//   shopId: "6474c7a60fcd2e5bf5a23bb5",
// });

// const { Shop } = require("./models/shop");
// Shop.create({
//   name: "Silpo",
// });

[
  {
    _id: "6474cf03332eb981e92b81a0",
    name: "Burger",
    price: 100,
    shop: "6474c77b526f0fb3d4c4fe3b",
  },
  {
    _id: "6474cfd182a8379e646fdb00",
    name: "Cheeseburger",
    price: 120,
    shop: "6474c77b526f0fb3d4c4fe3b",
  },
  {
    _id: "6474cfe1d900406d5ca4a0b3",
    name: "Royal Cheeseburger",
    price: 150,
    shop: "6474c77b526f0fb3d4c4fe3b",
  },
];

[
  {
    _id: "6474d1cbaf539aa2398c7017",
    name: "King Cheeseburger",
    price: 140,
    shop: "6474c796e3486601a417a3ac",
  },
  {
    _id: "6474d1d53efc657ae59c3b4c",
    name: "King Burger",
    price: 125,
    shop: "6474c796e3486601a417a3ac",
  },
];

[
  {
    _id: "6474d2255260d486f6649cfa",
    name: "Water",
    price: 35,
    shop: "6474c7a60fcd2e5bf5a23bb5",
  },
  {
    _id: "6474d23160cd69859d6ea679",
    name: "Chocolate",
    price: 45,
    shop: "6474c7a60fcd2e5bf5a23bb5",
  },
  {
    _id: "6474d23da13bdaba65b1de42",
    name: "Nuts",
    price: 70,
    shop: "6474c7a60fcd2e5bf5a23bb5",
  },
];
